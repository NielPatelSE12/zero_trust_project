import sqlite3
from flask import Flask, request, jsonify
from flask_cors import CORS
# python -m flask run to start server on port 5000
app = Flask(__name__)
CORS(app)

connection = sqlite3.connect('DroneDB')

cursor = connection.cursor()

cursor.execute(
    """
    CREATE TABLE IF NOT EXISTS users (
    username VARCHAR(255),
    password VARCHAR(255)
    )
"""
)

@app.route('/login', methods=['POST', 'GET'])
def login():
    x = request.get_json()
    username = x['username']
    password = x['password']
    connection = sqlite3.connect('DroneDB')
    cursor = connection.cursor()
    cursor.execute(
        """
        SELECT * FROM users
        WHERE username = ? and password = ?
    """
    , (username, password))
    rows = cursor.fetchall()
    if len(rows) > 0:
        # user with matching info was found so we can log them in
        return jsonify('valid')
    else:
        # user DNE
        return jsonify('invalid')

@app.route('/signup', methods=['POST', 'GET'])
def sign_up():
    x = request.get_json()
    username = x['username']
    password = x['password']
    connection = sqlite3.connect('DroneDB')
    cursor = connection.cursor()
    cursor.execute(
        """
    SELECT * FROM users
    WHERE username = ? and password = ?;
"""
    , (username, password))
    rows = cursor.fetchall()
    if len(rows) > 0:
        # username taken
        return jsonify(rows)
    else:
        cursor.execute(
            """
        INSERT INTO users(username, password) VALUES (?, ?)
"""
        , (username, password))
        connection.commit()
        return jsonify('sign up successful')
