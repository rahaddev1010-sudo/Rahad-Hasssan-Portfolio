import sys
from PIL import Image

def crop_image(input_path, output_path):
    img = Image.open(input_path)
    width, height = img.size
    
    # Assuming the face is in the top center
    # Let's crop a square from the top 15% to 65% or so
    # Adjust as needed based on a standard portrait photo
    size = min(width, height)
    left = (width - size) / 2
    top = height * 0.05
    right = left + size
    bottom = top + size
    
    if bottom > height:
        bottom = height
        top = height - size
        
    img_cropped = img.crop((left, top, right, bottom))
    img_cropped.save(output_path)
    print("Cropped successfully to", output_path)

if __name__ == "__main__":
    crop_image(sys.argv[1], sys.argv[2])
