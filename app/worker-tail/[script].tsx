import { useEffect, useRef, useState, useCallback } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Icon } from '@/components/ui/icon';
import { useTheme } from '@/hooks/use-theme';
import { EmptyState } from '@/components/ui/empty-state';
import { Banner } from '@/components/ui/kit';
import { useAuth } from '@/contexts/auth';
import { Spacing, FontSize, Radius } from '@/constants/theme';
import * as api from '@/services/cloudflare';

interface TailEvent {
  key: string;
  time: string;
  method?: string;
  url?: string;
  status?: number;
  outcome: string;
  logs: string[];
  exceptions: string[];
}

type ConnState = 'connecting' | 'live' | 'error' | 'closed';

/** TextDecoder isn't available on every RN engine, so fall back to manual UTF-8. */
function decodeUtf8(buf: ArrayBuffer): string {
  if (typeof TextDecoder !== 'undefined') return new TextDecoder().decode(buf);
  const bytes = new Uint8Array(buf);
  let out = '';
  for (let i = 0; i < bytes.length; i++) out += String.fromCharCode(bytes[i]);
  return decodeURIComponent(escape(out));
}

export default function WorkerTailScreen() {
  const { script } = useLocalSearchParams<{ script: string }>();
  const { t } = useTranslation();
  const { colors } = useTheme();
  const { accountId } = useAuth();

  const [events, setEvents] = useState<TailEvent[]>([]);
  const [connState, setConnState] = useState<ConnState>('connecting');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);

  const wsRef = useRef<WebSocket | null>(null);
  const pausedRef = useRef(false);
  const tailRef = useRef<{ id: string } | null>(null);
  const counter = useRef(0);

  pausedRef.current = paused;

  const connect = useCallback(async () => {
    if (!accountId || !script) return;
    setConnState('connecting');
    setErrorMsg(null);
    try {
      const res = await api.createWorkerTail(accountId, script);
      const tail = res.result;
      if (!tail?.url) throw new Error('No tail URL returned');
      tailRef.current = { id: tail.id };

      const ws = new WebSocket(tail.url, 'trace-v1');
      // Cloudflare sends trace events as binary frames, not text — without this
      // every event arrives as a Blob and silently fails to parse.
      ws.binaryType = 'arraybuffer';
      wsRef.current = ws;

      ws.onopen = () => setConnState('live');
      ws.onerror = () => {
        setConnState('error');
        setErrorMsg('WebSocket error');
      };
      ws.onclose = () => setConnState((s) => (s === 'error' ? s : 'closed'));
      ws.onmessage = async (msg) => {
        if (pausedRef.current) return;
        try {
          const raw = msg.data as unknown;
          let text: string;
          if (typeof raw === 'string') {
            text = raw;
          } else if (raw instanceof ArrayBuffer) {
            text = decodeUtf8(raw);
          } else if (raw && typeof (raw as Blob).text === 'function') {
            text = await (raw as Blob).text();
          } else {
            return;
          }
          const data = JSON.parse(text);
          const ev: TailEvent = {
            key: `ev-${counter.current++}`,
            time: new Date(data.eventTimestamp ?? Date.now()).toLocaleTimeString(),
            method: data.event?.request?.method,
            url: data.event?.request?.url,
            status: data.event?.response?.status,
            outcome: data.outcome ?? 'unknown',
            logs: (data.logs ?? []).map((l: any) =>
              Array.isArray(l.message) ? l.message.map((m: any) => (typeof m === 'string' ? m : JSON.stringify(m))).join(' ') : String(l.message)
            ),
            exceptions: (data.exceptions ?? []).map((e: any) => `${e.name}: ${e.message}`),
          };
          setEvents((prev) => [ev, ...prev].slice(0, 500));
        } catch {
          // non-JSON frame, skip
        }
      };
    } catch (e: any) {
      setConnState('error');
      const cfError = e?.response?.data?.errors?.[0];
      // 100311: assets-only Worker (static assets, no code) cannot be tailed
      setErrorMsg(
        cfError?.code === 100311
          ? t('tail.assets_only')
          : cfError?.message ?? e?.message ?? 'Failed to start tail'
      );
    }
  }, [accountId, script, t]);

  useEffect(() => {
    connect();
    return () => {
      wsRef.current?.close();
      if (accountId && script && tailRef.current) {
        api.deleteWorkerTail(accountId, script, tailRef.current.id).catch(() => {});
      }
    };
  }, [connect, accountId, script]);

  const stateColor = connState === 'live' ? colors.success : connState === 'connecting' ? colors.warning : colors.error;
  const stateLabel = t(`tail.state_${connState}`);

  const shortUrl = (u?: string) => {
    if (!u) return '';
    try {
      const parsed = new URL(u);
      return parsed.pathname + parsed.search;
    } catch {
      return u;
    }
  };

  const renderEvent = ({ item }: { item: TailEvent }) => {
    const ok = item.outcome === 'ok';
    return (
      <View style={[styles.eventCard, { backgroundColor: colors.surface, borderColor: colors.borderLight }]}>
        <View style={styles.eventTop}>
          {item.method && (
            <View style={[styles.methodPill, { backgroundColor: colors.surfaceSecondary }]}>
              <Text style={[styles.methodText, { color: colors.text }]}>{item.method}</Text>
            </View>
          )}
          {item.status !== undefined && (
            <Text style={[styles.statusText, { color: item.status < 400 ? colors.success : colors.error }]}>
              {item.status}
            </Text>
          )}
          <Text style={[styles.outcomeText, { color: ok ? colors.textTertiary : colors.error }]}>
            {item.outcome}
          </Text>
          <View style={styles.spacer} />
          <Text style={[styles.timeText, { color: colors.textTertiary }]}>{item.time}</Text>
        </View>
        {item.url ? (
          <Text style={[styles.urlText, { color: colors.text }]} numberOfLines={1}>{shortUrl(item.url)}</Text>
        ) : null}
        {item.logs.map((l, i) => (
          <Text key={i} style={[styles.logText, { color: colors.textSecondary }]} numberOfLines={3}>
            {l}
          </Text>
        ))}
        {item.exceptions.map((e, i) => (
          <Text key={`x${i}`} style={[styles.logText, { color: colors.error }]} numberOfLines={3}>
            {e}
          </Text>
        ))}
      </View>
    );
  };

  return (
    <>
      <Stack.Screen options={{ title: script }} />
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        {/* Status bar */}
        <View style={styles.top}>
          <View style={[styles.statusBar, { backgroundColor: colors.surface, borderColor: colors.borderLight }]}>
            <View style={[styles.stateDot, { backgroundColor: stateColor }]} />
            <Text style={[styles.stateText, { color: colors.text }]} numberOfLines={1}>{stateLabel}</Text>
            <View style={styles.spacer} />
            {(connState === 'error' || connState === 'closed') && (
              <TouchableOpacity
                onPress={connect}
                hitSlop={8}
                style={[styles.iconBtn, { backgroundColor: colors.surfaceSecondary }]}
                accessibilityRole="button"
                accessibilityLabel={t('common.retry')}
              >
                <Icon name="refresh" size={16} color={colors.textSecondary} />
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={() => setPaused(!paused)}
              hitSlop={8}
              style={[styles.iconBtn, { backgroundColor: paused ? colors.warning + '18' : colors.surfaceSecondary }]}
              accessibilityRole="button"
              accessibilityState={{ selected: paused }}
            >
              <Icon name={paused ? 'zap' : 'close'} size={16} color={paused ? colors.warning : colors.textSecondary} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setEvents([])}
              hitSlop={8}
              style={[styles.iconBtn, { backgroundColor: colors.surfaceSecondary }]}
              accessibilityRole="button"
            >
              <Icon name="delete-sweep" size={16} color={colors.textSecondary} />
            </TouchableOpacity>
          </View>
          {errorMsg && <Banner message={errorMsg} />}
        </View>

        <FlatList
          data={events}
          keyExtractor={(item) => item.key}
          renderItem={renderEvent}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <EmptyState
              icon="activity"
              title={t('tail.waiting')}
              message={t('tail.waiting_message')}
            />
          }
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  top: { paddingHorizontal: Spacing.lg, paddingTop: Spacing.lg, gap: Spacing.sm },
  statusBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    height: 52,
    paddingLeft: Spacing.lg,
    paddingRight: Spacing.sm,
    borderRadius: Radius.full,
    borderWidth: 1,
  },
  stateDot: { width: 8, height: 8, borderRadius: 4 },
  stateText: { fontSize: FontSize.md, fontWeight: '500', flexShrink: 1 },
  spacer: { flex: 1 },
  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: { padding: Spacing.lg, paddingBottom: Spacing.xxxl },
  eventCard: {
    borderRadius: Radius.lg,
    borderWidth: 1,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    marginBottom: Spacing.sm,
    gap: 4,
  },
  eventTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  methodPill: {
    paddingHorizontal: 9,
    paddingVertical: 3,
    borderRadius: Radius.full,
  },
  methodText: { fontSize: FontSize.xs, fontWeight: '600' },
  statusText: { fontSize: FontSize.sm, fontWeight: '500', fontFamily: 'monospace' },
  outcomeText: { fontSize: FontSize.xs },
  timeText: { fontSize: FontSize.xs },
  urlText: { fontSize: 12, fontFamily: 'monospace' },
  logText: { fontSize: 11, fontFamily: 'monospace', lineHeight: 16 },
});
