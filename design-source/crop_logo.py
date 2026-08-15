from PIL import Image, ImageOps
import sys

src = r"C:\Users\AbrahamOtieno\Downloads\logo.jpeg"
im = Image.open(src).convert("RGB")
w, h = im.size

# Find bounding box of non-black (the gold mark) using a luminance threshold.
gray = im.convert("L")
threshold = 18
bbox = gray.point(lambda p: 255 if p > threshold else 0).getbbox()
if bbox is None:
    print("No content found above threshold")
    sys.exit(1)

l, t, r, b = bbox
bw, bh = r - l, b - t
pad_x = int(bw * 0.10)
pad_y = int(bh * 0.10)
l = max(0, l - pad_x)
t = max(0, t - pad_y)
r = min(w, r + pad_x)
b = min(h, b + pad_y)
cropped = im.crop((l, t, r, b))
cw, ch = cropped.size
print("tight crop:", cropped.size)

# Pad to a centered square (mark sits slightly left-of-center within the square
# so the visual weight of the letters+leaf reads centered inside a circle).
side = max(cw, ch)
square = Image.new("RGB", (side, side), (5, 5, 5))
off_x = (side - cw) // 2
off_y = (side - ch) // 2
square.paste(cropped, (off_x, off_y))

out = square.resize((520, 520), Image.LANCZOS)
out.save(r"C:\Users\AbrahamOtieno\JWN\assets\images\logo-mark.png", optimize=True)
print("saved logo-mark.png", out.size)

favicon = square.resize((512, 512), Image.LANCZOS)
favicon.save(r"C:\Users\AbrahamOtieno\JWN\assets\images\favicon-512.png")
print("saved favicon-512.png")
