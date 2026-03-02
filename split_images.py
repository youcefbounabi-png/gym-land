from PIL import Image
import os

def split_and_save(file_path, prefix, ext):
    if os.path.exists(file_path):
        img = Image.open(file_path)
        w, h = img.size
        print(f"Splitting {file_path}: {w}x{h}")
        before = img.crop((0, 0, w // 2, h))
        after = img.crop((w // 2, 0, w, h))
        before.save(f'public/{prefix}_before.{ext}')
        after.save(f'public/{prefix}_after.{ext}')
        print(f"Saved: public/{prefix}_before.{ext} and public/{prefix}_after.{ext}")
    else:
        print(f"Error: {file_path} not found.")

split_and_save('public/transformations0.jpg', 'transformation0', 'jpg')
split_and_save('public/transformations0.png', 'transformation1', 'png')
