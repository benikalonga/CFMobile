# Exports the app icon layers from icon.html into assets/images and store/.
# Usage: powershell -File export-icon.ps1 [-Concept 3]
param([int]$Concept = 3)

$d = $PSScriptRoot
$repo = Resolve-Path (Join-Path $d '..\..')
$img = Join-Path $repo 'assets\images'
$chrome = Join-Path $env:ProgramFiles 'Google\Chrome\Application\chrome.exe'
$base = 'file:///' + ($d -replace '\\', '/') + '/icon.html'
$profile = Join-Path $env:TEMP 'cfmobile-icon-chrome'

function Shot($layer, $out) {
  Start-Process -FilePath $chrome -Wait -WindowStyle Hidden -ArgumentList @(
    '--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
    '--window-size=1024,1024', '--virtual-time-budget=3000', '--default-background-color=00000000',
    "--user-data-dir=$profile", '--no-first-run', "--screenshot=$out", "`"$base`?c=$Concept&layer=$layer`""
  )
}

Shot 'full'   (Join-Path $img 'icon.png')
Shot 'fg'     (Join-Path $img 'android-icon-foreground.png')
Shot 'bg'     (Join-Path $img 'android-icon-background.png')
Shot 'mono'   (Join-Path $img 'android-icon-monochrome.png')
Shot 'splash' (Join-Path $img 'splash-icon.png')

# Smaller copies: favicon (64), store art brand mark and Play Console icon (512).
Add-Type -AssemblyName System.Drawing
function Resize($src, $out, $size) {
  $in = [System.Drawing.Image]::FromFile($src)
  $bmp = New-Object System.Drawing.Bitmap $size, $size
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = 'HighQualityBicubic'; $g.PixelOffsetMode = 'HighQuality'; $g.SmoothingMode = 'HighQuality'
  $g.DrawImage($in, 0, 0, $size, $size)
  $g.Dispose(); $in.Dispose()
  $bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png); $bmp.Dispose()
}
$full = Join-Path $img 'icon.png'
Resize $full (Join-Path $img 'favicon.png') 64
Resize $full (Join-Path $repo 'store\icon.png') 512
New-Item -ItemType Directory -Force (Join-Path $repo 'store\out') | Out-Null
Resize $full (Join-Path $repo 'store\out\play-icon-512.png') 512

Get-ChildItem $img -Filter '*icon*.png' | Select-Object Name, Length
