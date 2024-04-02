import sqlite3

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

connection.commit()