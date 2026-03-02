from moviepy import VideoFileClip
import os

input_path = 'public/hero.mp4'
output_path = 'public/hero_optimized.mp4'

if os.path.exists(input_path):
    print(f"Loading video: {input_path}")
    clip = VideoFileClip(input_path)
    
    # Remove audio to save space
    print("Removing audio track...")
    clip = clip.without_audio()
    
    # Target 720p if it's larger
    if clip.h > 720:
        print(f"Resizing from {clip.h}p to 720p...")
        clip = clip.resized(height=720)
    
    # Write with lower bitrate
    print(f"Writing optimized video to {output_path}...")
    clip.write_videofile(output_path, bitrate="1200k", codec="libx264", audio=False)
    
    clip.close()
    
    orig_size = os.path.getsize(input_path) / (1024 * 1024)
    new_size = os.path.getsize(output_path) / (1024 * 1024)
    print(f"Original Size: {orig_size:.2f} MB")
    print(f"Optimized Size: {new_size:.2f} MB")
    print(f"Reduction: {((orig_size - new_size) / orig_size) * 100:.1f}%")
else:
    print(f"Error: {input_path} not found.")
