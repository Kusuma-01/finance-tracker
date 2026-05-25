import sqlite3
import os

# Current folder path
BASE_DIR = os.path.dirname(
    os.path.abspath(__file__)
)

# Database path
db_path = os.path.join(
    BASE_DIR,
    "database.db"
)

# Connect database
connection = sqlite3.connect(db_path)

cursor = connection.cursor()

# Users table
cursor.execute("""

CREATE TABLE IF NOT EXISTS users (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    name TEXT,

    email TEXT UNIQUE,

    password TEXT,

    income REAL

)

""")

# Expenses table
cursor.execute("""

CREATE TABLE IF NOT EXISTS expenses (

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    amount REAL,

    category TEXT

)

""")

connection.commit()

connection.close()

print("Database Created Successfully ✅")