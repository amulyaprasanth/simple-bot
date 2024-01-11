from flask import Flask, render_template, jsonify, request
from bot import get_response
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/receive-data', methods=['POST'])
def receive_data():
    data = request.get_json()
    user_message = data.get("user_message")
    response = get_response(user_message)
    return jsonify({'bot-message': response})


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8000, debug=True)
