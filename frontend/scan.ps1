Add-Type -AssemblyName System.Drawing
$bmp = New-Object System.Drawing.Bitmap ("public/images/template 1.png")
for ($y = 0; $y -lt 600; $y += 20) {
    $c = $bmp.GetPixel(425, $y)
    Write-Host ("y=" + $y + " R=" + $c.R + " G=" + $c.G + " B=" + $c.B)
}
$bmp.Dispose()
