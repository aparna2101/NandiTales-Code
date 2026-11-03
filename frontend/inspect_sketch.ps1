Add-Type -AssemblyName System.Drawing

$src = New-Object System.Drawing.Bitmap("public/images/template2.png")
Write-Host "Width=$($src.Width) Height=$($src.Height)"

# In template2.png (width=850):
# Let's locate the Artisans section row
# The collection cards end around y=440
# The Artisan section starts around y=445 to y=630
# The sketch is on the right side of the card:
# Card starts at x=24, ends at x=826.
# Right half starts around x=430 to x=826 (width ~ 396)
# Let's check rows between y=430 and y=640

for ($y = 430; $y -le 640; $y += 10) {
    $c = $src.GetPixel(600, $y)
    Write-Host "y=$y R=$($c.R) G=$($c.G) B=$($c.B)"
}

$src.Dispose()
