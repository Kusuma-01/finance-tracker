import sqlite3

connection = sqlite3.connect(
    "database.db"
)

cursor = connection.cursor()

cursor.execute("""

ALTER TABLE users

ADD COLUMN budget_limit INTEGER
DEFAULT 10000

""")

connection.commit()

connection.close()

print("Budget column added successfully")