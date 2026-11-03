Add-Type -AssemblyName System.Drawing

$src = New-Object System.Drawing.Bitmap("public/images/template2.png")

# Sketch region on the right side of the Artisan card in template2.png:
# x from 550 to 990 (w=440), y from 448 to 626 (h=178)
$rect = New-Object System.Drawing.Rectangle(550, 448, 440, 178)
$cropped = $src.Clone($rect, $src.PixelFormat)
$cropped.Save("public/images/exact_artisan_sketch.png", [System.Drawing.Imaging.ImageFormat]::Png)
$cropped.Dispose()

# Also let's crop the artisan hands photo on the left side of the card in template2.png:
# x from 34 to 450 (w=416), y from 448 to 626 (h=178)
$rectHands = New-Object System.Drawing.Rectangle(34, 448, 416, 178)
$croppedHands = $src.Clone($rectHands, $src.PixelFormat)
$croppedHands.Save("public/images/exact_artisan_hands.png", [System.Drawing.Imaging.ImageFormat]::Png)
$croppedHands.Dispose()

$src.Dispose()
Write-Host "Both exact sketch and hands cropped!"
