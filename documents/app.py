from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import base64
import numpy as np
app = Flask(__name__)
CORS(app)

def flip_image(base64_string, axis = 0):
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

@app.route('/flip-image', methods=['POST'])
def flip_image_endpoint():
    try:
        data = request.json
        original_base64 = data['image']
        param = data['param'].split(",")

        flipped_base64 = flip_image(original_base64.replace("data:image/png;base64,",""), int(param[0]))

        response_data = {'image': "data:image/png;base64,"+flipped_base64}
        global progress
        if int(param[1])==1:
            while(progress<100):
                time.sleep(0.1)
        return jsonify(response_data), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    

# This would be replaced with actual task progress tracking
progress = 0
import time
import threading

def long_running_task():
    global progress
    for i in range(10):
        time.sleep(1)  # Simulate a task
        progress += 10
        if progress >= 100:
            break  # Exit the loop if progress reaches 100


@app.route('/start-process')
def start_process():
    global progress
    progress = 0
    thread = threading.Thread(target=long_running_task)
    thread.start()
    return jsonify({"message": "Process started"}), 202

@app.route('/progress')
def get_progress():
    return jsonify({"progress": progress})

@app.route('/result')
def get_result():
    # Implement logic to retrieve and return the result of the process
    return jsonify({"result": "Process complete!"})

if __name__ == '__main__':
    app.run(debug=True)
