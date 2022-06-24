
CREATE TABLE IF NOT EXISTS Users_cookenu (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL
);

CREATE TABLE IF NOT EXISTS Recipe_cookenu (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    creation_date DATE NOT NULL
);

DESCRIBE Recipe_cookenu;

SELECT * FROM Users_cookenu;

ALTER TABLE Recipe_cookenu
MODIFY COLUMN  creation_date TIMESTAMP DEFAULT NOW();

SELECT * FROM `Recipe_cookenu`;