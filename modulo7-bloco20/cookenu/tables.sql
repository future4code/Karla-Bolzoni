
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

CREATE TABLE IF NOT EXISTS User_friends (
    user VARCHAR(64),
    user_follow_id VARCHAR(64),
    PRIMARY KEY (user, user_follow_id),
    FOREIGN KEY (user) REFERENCES Users_cookenu(id),
    FOREIGN KEY (user_follow_id) REFERENCES Users_cookenu(id)
);

DESCRIBE Recipe_cookenu;
DESCRIBE User_friends;


SELECT * FROM Users_cookenu;

ALTER TABLE Recipe_cookenu
MODIFY COLUMN  creation_date TIMESTAMP DEFAULT NOW();

SELECT * FROM `Recipe_cookenu`;

ALTER TABLE `Users_cookenu`
ADD COLUMN role_user VARCHAR(255);

DROP TABLE `Recipe_users`;