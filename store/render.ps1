# Renders the Play Store screenshots and feature graphics from world.html / feature.html.
# Usage: powershell -File render.ps1   (run from anywhere; paths are relative to this script)
$d = $PSScriptRoot
$chrome = Join-Path $env:ProgramFiles 'Google\Chrome\Application\chrome.exe'
$base = 'file:///' + ($d -replace '\\', '/')
$profile = Join-Path $env:TEMP 'cfmobile-store-chrome'

function Shot($url, $out, $w, $h) {
  Start-Process -FilePath $chrome -Wait -WindowStyle Hidden -ArgumentList @(
    '--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
    "--window-size=$w,$h", '--virtual-time-budget=9000', "--user-data-dir=$profile", '--no-first-run',
    "--screenshot=$out", "`"$url`""
  )
}

foreach ($lang in 'en', 'id') {
  New-Item -ItemType Directory -Force (Join-Path $d "out\$lang"), (Join-Path $d "out\art\$lang") | Out-Null
  foreach ($i in 0..7) {
    $n = $i + 1
    Shot "$base/world.html?lang=$lang&frame=$i" (Join-Path $d "out\$lang\screenshot-$n.png") 1080 1920
    # Same frame without the headline, for layouts where the text is added separately.
    Shot "$base/world.html?lang=$lang&frame=$i&text=0" (Join-Path $d "out\art\$lang\art-$n.png") 1080 1920
  }
  Shot "$base/feature.html?lang=$lang" (Join-Path $d "out\$lang\feature-graphic.png") 1024 500
}

(Get-ChildItem (Join-Path $d 'out') -Recurse -File | Measure-Object).Count
