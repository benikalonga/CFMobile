import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, router, Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { useTheme } from '@/hooks/use-theme';
import { Button } from '@/components/ui/button';
import { Loading } from '@/components/ui/loading';
import { SectionHeader } from '@/components/ui/section-header';
import { ChipRow, Field, Group, ListRow, ToggleRow } from '@/components/ui/kit';
import { Spacing, FontSize } from '@/constants/theme';
import * as api from '@/services/cloudflare';
import { recordHappyMoment } from '@/services/review-prompt';
import { DNSRecordType, DNSRecordInput } from '@/services/types';

const RECORD_TYPES: DNSRecordType[] = ['A', 'AAAA', 'CNAME', 'MX', 'TXT', 'NS', 'SRV', 'CAA'];

const TYPE_DESCRIPTIONS: Partial<Record<DNSRecordType, string>> = {
  A: 'IPv4 address',
  AAAA: 'IPv6 address',
  CNAME: 'Alias to another domain',
  MX: 'Mail server',
  TXT: 'Text record (SPF, DMARC, verification)',
  NS: 'Name server delegation',
  SRV: 'Service location record',
  CAA: 'Certificate authority authorization',
};

export default function DNSEditScreen() {
  const { id, recordId } = useLocalSearchParams<{ id: string; recordId?: string }>();
  const { t } = useTranslation();
  const { colors } = useTheme();
  const isEdit = !!recordId;

  const [type, setType] = useState<DNSRecordType>('A');
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [ttl, setTtl] = useState('1');
  const [proxied, setProxied] = useState(true);
  const [priority, setPriority] = useState('10');
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(isEdit);

  useEffect(() => {
    if (isEdit && recordId) {
      (async () => {
        try {
          const res = await api.getDnsRecord(id, recordId);
          const r = res.result;
          setType(r.type);
          setName(r.name);
          setContent(r.content);
          setTtl(String(r.ttl));
          setProxied(r.proxied);
          if (r.priority !== undefined) setPriority(String(r.priority));
          if (r.comment) setComment(r.comment);
        } catch {
          Alert.alert(t('common.error'), t('dns.fetch_error'));
          router.back();
        } finally {
          setFetching(false);
        }
      })();
    }
  }, [id, recordId, isEdit, t]);

  const handleSave = async () => {
    if (!name.trim() || !content.trim()) {
      Alert.alert(t('common.error'), t('dns.fields_required'));
      return;
    }

    setLoading(true);
    const record: DNSRecordInput = {
      type,
      name: name.trim(),
      content: content.trim(),
      ttl: parseInt(ttl) || 1,
      proxied: ['A', 'AAAA', 'CNAME'].includes(type) ? proxied : false,
      comment: comment.trim() || undefined,
    };
    if (['MX', 'SRV'].includes(type)) {
      record.priority = parseInt(priority) || 10;
    }

    try {
      if (isEdit && recordId) {
        await api.updateDnsRecord(id, recordId, record);
      } else {
        await api.createDnsRecord(id, record);
      }
      recordHappyMoment();
      router.back();
    } catch (e: any) {
      const msg = e?.response?.data?.errors?.[0]?.message ?? t('dns.save_error');
      Alert.alert(t('common.error'), msg);
    } finally {
      setLoading(false);
    }
  };

  if (fetching) return <Loading />;

  const showProxyToggle = ['A', 'AAAA', 'CNAME'].includes(type);
  const showPriority = ['MX', 'SRV'].includes(type);

  const placeholderForType = (t: DNSRecordType): string => {
    switch (t) {
      case 'A': return '192.168.1.1';
      case 'AAAA': return '2001:db8::1';
      case 'CNAME': return 'target.example.com';
      case 'MX': return 'mail.example.com';
      case 'TXT': return 'v=spf1 include:_spf.google.com ~all';
      case 'NS': return 'ns1.example.com';
      case 'SRV': return '_service._proto.name';
      case 'CAA': return '0 issue "letsencrypt.org"';
      default: return '';
    }
  };

  return (
    <>
      <Stack.Screen options={{ title: isEdit ? t('dns.edit_record') : t('dns.add_record') }} />
      <ScrollView
        style={[styles.container, { backgroundColor: colors.background }]}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Quick template suggestion */}
        {!isEdit && (
          <Group>
            <ListRow
              icon="layers"
              title="Use a template instead"
              subtitle="One-tap setup for Vercel, Netlify, GitHub Pages, Google Workspace…"
              onPress={() => router.replace({ pathname: `/zone/[id]/dns-templates` as any, params: { id } })}
            />
          </Group>
        )}

        {/* Type */}
        <SectionHeader title="Record Type" />
        <ChipRow
          wrap
          options={RECORD_TYPES.map((rt) => ({ value: rt, label: rt }))}
          value={type}
          onChange={setType}
        />
        <Text style={[styles.typeDesc, { color: colors.textSecondary }]}>
          {TYPE_DESCRIPTIONS[type]}
        </Text>

        {/* Name + Content */}
        <SectionHeader title="Record Details" />
        <View style={styles.fields}>
          <Field
            label={t('dns.name')}
            placeholder="@, www, app.example.com"
            value={name}
            onChangeText={setName}
            autoCapitalize="none"
            autoCorrect={false}
            mono
          />
          <Field
            label={t('dns.content')}
            placeholder={placeholderForType(type)}
            value={content}
            onChangeText={setContent}
            autoCapitalize="none"
            autoCorrect={false}
            multiline={type === 'TXT'}
            mono
          />
        </View>

        {/* Advanced */}
        <SectionHeader title="Advanced" />
        <View style={styles.fields}>
          <Field
            label={`${t('dns.ttl')} (1 = Auto)`}
            placeholder="1"
            value={ttl}
            onChangeText={setTtl}
            keyboardType="numeric"
          />
          {showPriority && (
            <Field
              label={t('dns.priority')}
              placeholder="10"
              value={priority}
              onChangeText={setPriority}
              keyboardType="numeric"
            />
          )}
          <Field
            label={t('dns.comment')}
            placeholder={t('dns.comment_placeholder')}
            value={comment}
            onChangeText={setComment}
          />
        </View>

        {/* Proxy toggle — the whole row toggles, as well as the switch */}
        {showProxyToggle && (
          <Group style={styles.proxy}>
            <TouchableOpacity onPress={() => setProxied(!proxied)} activeOpacity={0.85}>
              <ToggleRow
                icon={proxied ? 'cloud' : 'cloud-off'}
                iconTone={proxied ? 'accent' : 'neutral'}
                title={proxied ? 'Proxied (Orange Cloud)' : 'DNS Only (Grey Cloud)'}
                subtitle={proxied
                  ? 'Traffic routed through Cloudflare CDN & protection'
                  : 'Direct DNS resolution, no Cloudflare proxy'}
                value={proxied}
                onValueChange={setProxied}
              />
            </TouchableOpacity>
          </Group>
        )}

        <Button
          title={isEdit ? t('dns.update') : t('dns.create')}
          onPress={handleSave}
          loading={loading}
          size="lg"
          style={{ marginTop: Spacing.xl }}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: Spacing.lg, paddingBottom: Spacing.xxxl },
  typeDesc: { fontSize: FontSize.sm, marginTop: Spacing.sm, paddingHorizontal: Spacing.xs },
  // Field brings its own top margin; pull the first one back under the section title.
  fields: { marginTop: -Spacing.md },
  proxy: { marginTop: Spacing.xl },
});
