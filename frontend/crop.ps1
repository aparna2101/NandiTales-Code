Add-Type -AssemblyName System.Drawing
$src = New-Object System.Drawing.Bitmap ("public/images/template 1.png")

# Crop 1: Hero Banner (y=75 to y=485)
$rectHero = New-Object System.Drawing.Rectangle (0, 75, 850, 410)
$heroBmp = $src.Clone($rectHero, $src.PixelFormat)
$heroBmp.Save("public/images/kashi_hero_banner_exact.png", [System.Drawing.Imaging.ImageFormat]::Png)
$heroBmp.Dispose()

# Crop 2: Full Banner with Header & Trust Bar (y=0 to y=530)
$rectFull = New-Object System.Drawing.Rectangle (0, 0, 850, 530)
$fullBmp = $src.Clone($rectFull, $src.PixelFormat)
$fullBmp.Save("public/images/kashi_homepage_top_exact.png", [System.Drawing.Imaging.ImageFormat]::Png)
$fullBmp.Dispose()

$src.Dispose()
Write-Host "Cropped successfully!"
