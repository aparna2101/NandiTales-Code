Add-Type -AssemblyName System.Drawing

$src = New-Object System.Drawing.Bitmap ("public/images/template 1.png")
Write-Host ("Image size: " + $src.Width + " x " + $src.Height)

# In template 1.png:
# Total Width: 850
# Below trust bar is y=540
# The 4 cards are located horizontally from x=35 to x=815:
# Card width is around 180, gap is around 15.
# Let's inspect rows around y=540 to y=850.
# The card image boxes are from y=545 to y=695 (approx 150px height)
# Let's crop the 4 card photo regions:

# Card 1: Incense Sticks (approx x=35, y=545, w=180, h=150)
$rect1 = New-Object System.Drawing.Rectangle (35, 545, 180, 150)
$c1 = $src.Clone($rect1, $src.PixelFormat)
$c1.Save("public/images/clean_card_incense.png", [System.Drawing.Imaging.ImageFormat]::Png)
$c1.Dispose()

# Card 2: Diyas & Ritual Essentials (approx x=232, y=545, w=180, h=150)
$rect2 = New-Object System.Drawing.Rectangle (232, 545, 180, 150)
$c2 = $src.Clone($rect2, $src.PixelFormat)
$c2.Save("public/images/clean_card_diyas.png", [System.Drawing.Imaging.ImageFormat]::Png)
$c2.Dispose()

# Card 3: Poojan Kits (approx x=430, y=545, w=180, h=150)
$rect3 = New-Object System.Drawing.Rectangle (430, 545, 180, 150)
$c3 = $src.Clone($rect3, $src.PixelFormat)
$c3.Save("public/images/clean_card_poojan_kits.png", [System.Drawing.Imaging.ImageFormat]::Png)
$c3.Dispose()

# Card 4: Sacred Gifts (approx x=628, y=545, w=180, h=150)
$rect4 = New-Object System.Drawing.Rectangle (628, 545, 180, 150)
$c4 = $src.Clone($rect4, $src.PixelFormat)
$c4.Save("public/images/clean_card_sacred_gifts.png", [System.Drawing.Imaging.ImageFormat]::Png)
$c4.Dispose()

$src.Dispose()
Write-Host "4 Cards cropped!"
