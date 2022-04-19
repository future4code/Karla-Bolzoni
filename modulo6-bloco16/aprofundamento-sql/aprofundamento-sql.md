```
use `joy-419728-karla-bolzoni`;
#criando tabela

DESCRIBE Actor;

SELECT * FROM Actor;

 #Exercício 1
ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

 #1-A) Drop: Deleta coluna salary
 #1-B) CHANGE: redeclara a coluna gender para sex, com até 6 letras
 #1-C) CHANGE: redeclara a coluna gender para gender, com até 255 letras
 #1-D)
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

 #Exercício 2-A
UPDATE Actor SET name = "Moacyr Frannco", birth_date = "1994-10-19" WHERE id = "003";

 #Exercício 2-B
UPDATE Actor SET name=UPPER(name) WHERE id = "005";

 #Exercício 2-C 
UPDATE Actor SET name= "Glória Maria", salary = 20000, birth_date = "1993-10-28", gender = "female" WHERE id = "005";

 #Exercício 3-A
SET SQL_SAFE_UPDATES = 0;
DELETE FROM Actor WHERE name = "Moacyr Frannco";
 
 #Exercício 3-B
DELETE FROM Actor WHERE gender = "male" AND salary < 1000000;

 #Exercício 4-A
SELECT MAX(salary) FROM Actor;

 #Exercício 4-B
SELECT MIN(salary) FROM Actor;

 #Exercício 4-C
SELECT COUNT(*) FROM Actor WHERE gender = "female";

 #Exercício 4-D
SELECT SUM(salary) FROM Actor;

 #Exercício 5-A: Retorna a quantidade de atores por gênero
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

 #Exercício 5-B
SELECT id, name FROM Actor ORDER BY name DESC;

 #Exercício 5-C
SELECT * FROM Actor ORDER BY salary ASC;

 #Exercício 5-D
SELECT * FROM Actor ORDER BY salary ASC LIMIT 3;
 
 #Exercício 5-D
SELECT AVG(salary), gender FROM Actor GROUP BY gender;

 #Exercício 6-A)
ALTER TABLE Movie ADD playing_limit_date DATE;

DESCRIBE Movie;
SELECT * FROM Movie;

 #Exercício 6-B)
ALTER TABLE Movie CHANGE rating rating FLOAT NOT NULL;

 #Exercício 6-C
UPDATE Movie SET playing_limit_date = "2022-10-28" WHERE id = "002";

UPDATE Movie SET playing_limit_date = "2021-10-28" WHERE id = "003";
 
 #Exercício 6-D: 0 arrows afected, ou seja, nenhuma linha sofre esta alteração pq n localizou o ID
DELETE FROM Movie WHERE id = "001";

UPDATE Movie SET sinopse = "testando" WHERE id = "001";


```