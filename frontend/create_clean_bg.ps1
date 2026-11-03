Add-Type -AssemblyName System.Drawing

$src = New-Object System.Drawing.Bitmap ("public/images/kashi_hero_banner_exact.png")
$width = $src.Width
$height = $src.Height

# Create a clean bitmap
$clean = New-Object System.Drawing.Bitmap ($width, $height)
$g = [System.Drawing.Graphics]::FromImage($clean)
$g.DrawImage($src, 0, 0, $width, $height)

# On the left (x=0 to x=380, y=0 to y=320), the background is the smooth dawn sky.
# Let's paint a smooth natural gradient from x=0 to x=380 matching the sky at x=380.
# The sky at top-left is Warm Ivory #FDF7EC (R=253, G=247, B=236), gently transitioning down to warm morning peach #F9DFC2 near horizon.
for ($y = 0; $y -lt 320; $y++) {
    # Sample sky color at x=380 for this row
    $cRight = $src.GetPixel(380, $y)
    
    # Calculate top to bottom natural sky tint
    $ratioY = $y / 320.0
    $rLeft = [int](254 * (1 - $ratioY) + 252 * $ratioY)
    $gLeft = [int](248 * (1 - $ratioY) + 236 * $ratioY)
    $bLeft = [int](239 * (1 - $ratioY) + 215 * $ratioY)

    for ($x = 0; $x -lt 380; $x++) {
        $t = $x / 380.0
        # Smooth ease transition
        $ease = $t * $t * (3 - 2 * $t)
        
        $r = [int]($rLeft * (1 - $ease) + $cRight.R * $ease)
        $g = [int]($gLeft * (1 - $ease) + $cRight.G * $ease)
        $b = [int]($bLeft * (1 - $ease) + $cRight.B * $ease)
        
        $col = [System.Drawing.Color]::FromArgb(255, [Math]::Min(255, $r), [Math]::Min(255, $g), [Math]::Min(255, $b))
        $clean.SetPixel($x, $y, $col)
    }
}

# The button was at x=55 to x=250, y=235 to y=275 over the distant river/water.
# Let's blend water colors at y=235 to y=275 from x=55 to x=250 using water pixels from y=280 to y=310.
for ($y = 230; $y -lt 280; $y++) {
    for ($x = 50; $x -lt 260; $x++) {
        # Sample clean water color nearby
        $sampleY = [Math]::Min($height - 1, $y + 40)
        $waterCol = $src.GetPixel([Math]::Min($width - 1, $x + 60), $sampleY)
        
        # Soft mist blend over button area
        $tY = ($y - 230) / 50.0
        $skyCol = $clean.GetPixel($x, 225)
        $r = [int]($skyCol.R * (1 - $tY) + $waterCol.R * $tY)
        $g = [int]($skyCol.G * (1 - $tY) + $waterCol.G * $tY)
        $b = [int]($skyCol.B * (1 - $tY) + $waterCol.B * $tY)
        
        $clean.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $r, $g, $b))
    }
}

$clean.Save("public/images/kashi_hero_clean_bg.png", [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$clean.Dispose()
$src.Dispose()
Write-Host "Created clean background successfully!"
