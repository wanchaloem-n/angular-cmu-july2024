from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import base64
import numpy as np

app = Flask(__name__)
CORS(app)

# pip install opencv-python
# pip install flask flask-cors

def flip_image(base64_string, axis=0):
    # Convert base64 string to image
    img_data = base64.b64decode(base64_string)
    np_arr = np.frombuffer(img_data, np.uint8)
    img = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

    # Flip the image
    flipped_img = cv2.flip(img, axis)  # 1 for horizontal flip, 0 for vertical flip, -1 for both

    # Convert flipped image to base64 string
    _, encoded_img = cv2.imencode('.png', flipped_img)
    flipped_base64 = base64.b64encode(encoded_img).decode('utf-8')

    return flipped_base64

def deblur_image(base64_string, kernel_size=(5, 5)):
    try:
        img_data = base64.b64decode(base64_string)
        np_arr = np.frombuffer(img_data, np.uint8)
        img = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

        if img is None:
            raise ValueError("Image decoding failed. The image data might be corrupted or empty.")

        blurred_img = cv2.GaussianBlur(img, kernel_size, 0)
        deblurred_img = cv2.addWeighted(img, 1.5, blurred_img, -0.5, 0)

        _, encoded_img = cv2.imencode('.png', deblurred_img)
        deblurred_base64 = base64.b64encode(encoded_img).decode('utf-8')

        return deblurred_base64
    except Exception as e:
        raise ValueError(f"Deblurring failed: {str(e)}")

@app.route('/flip-image', methods=['POST'])
def flip_image_endpoint():
    try:
        data = request.json
        original_base64 = data['image']
        param = data['param'].split(",")

        flipped_base64 = flip_image(original_base64.replace("data:image/png;base64,",""), int(param[0]))

        response_data = {'image': "data:image/png;base64,"+flipped_base64}
        return jsonify(response_data), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/deblur-image', methods=['POST'])
def deblur_image_endpoint():
    try:
        data = request.json
        original_base64 = data['image']
        deblurred_base64 = deblur_image(original_base64.replace("data:image/png;base64,", ""))

        response_data = {'image': "data:image/png;base64," + deblurred_base64}
        return jsonify(response_data), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 200

if __name__ == '__main__':
    app.run(debug=True)
