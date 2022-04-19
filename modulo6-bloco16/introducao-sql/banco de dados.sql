use `joy-419728-karla-bolzoni`;

#criando tabela
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
#A) VARCHAR(n): tipo string com a quantidade caracteres / DATE: tipo data yyy-mm-dd / NOT NULL: campo não pode ficar vazio 

SHOW DATABASES;
#B) Show databse mostra informações do banco de dados.

SHOW TABLES;
#B) Mostra o nome das tabelas

DESCRIBE Actor;
#C) Mostra todos os campos da tabela solicitada

#2)Inserindo ator na tabela Actor
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

#2-A)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

#2-B) Query interrompida pois o ID é um PRIMARY KEY, uma chave única que não se repete
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Menezes",
  1300000,
  "1983-08-10", 
  "female"
);

#C)Error Code: 1136. Column count doesn't match value count at row 1 - A quantidade dos valores que estão sendo passados é diferente da quantidade 
#dos valores que estão em values
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

#D) Error Code: 1364. Field 'name' doesn't have a default value
INSERT INTO Actor (id,name, salary, birth_date, gender)
VALUES(
  "004",
  "maria silva",
  400000,
  "1949-04-18", 
  "male"
);

#E) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1, Data entre aspas
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

#3-A) 
SELECT * FROM Actor WHERE gender = "female";

#3-B)
SELECT salary FROM Actor WHERE name = "Tony Ramos";

#3-C) Retornou nul em todas as colunas
SELECT * FROM Actor WHERE gender = "invalid";

#3-D) 
SELECT id, name, salary FROM Actor WHERE salary  <= 500000;

#3-E) Erro de sintaxe, corrigido ponto e vírgula no fim da frase
SELECT id, name from Actor WHERE id = "002";

#4-A) Esta query vai selecionar (select) todas as colunas(*) que vem da tabela Actor onde(where)
# o nome comece com a Letra A e pode ter qualquer coisa após ou comece com a letra J e pode ter qualquer coisa após
# e (and) o salário maior que 300000 

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

#4-B) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00

SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

#4-C) Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome. 

SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%";

#4-D) 
SELECT * FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
AND salary BETWEEN 350000 AND 900000;
  


SELECT * FROM Actor;

#5-A) Criando tabela de filmes
CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL
);

#5-B)
INSERT INTO Movie (id, name, sinopse, release_date, rating) 
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);

INSERT INTO Movie (id, name, sinopse, release_date, rating) 
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);

INSERT INTO Movie (id, name, sinopse, release_date, rating) 
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2012-11-02",
    8
);

INSERT INTO Movie (id, name, sinopse, release_date, rating) 
VALUES(
	"004",
    "Cidade de Deus",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);

#6-a) Retorne o id, título e avaliação a partir de um id específico;

SELECT id, name, rating FROM Movie WHERE id = "001";

#6-B)Retorne um filme a partir de um nome específico;
SELECT * FROM Movie WHERE name = "Cidade de Deus";

#6-C) Retorne o id, título e sinopse dos filmes com avaliação mínima de 7
SELECT id, name, sinopse FROM Movie WHERE rating > 7;

#7-A) Retorna um filme cujo título contenha a palavra vida
SELECT * FROM Movie WHERE name LIKE "%vida%";

#7-B) pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer TERMO DE BUSCA para exemplificar.
SELECT * FROM Movie WHERE name LIKE "%Deus%" OR sinopse LIKE "%vida%"; 

#7-C) Procure por todos os filmes que já tenham lançado
SELECT * FROM Movie WHERE release_date < "2022-04-12";

#7-D) Procure por algum filme que já tenha lançado, 
#com o termo de busca contido no título ou sinopse e com a avaliação maior do que 7. 

SELECT * FROM Movie WHERE release_date < "2022-04-12" AND (name LIKE "%vida%" OR sinopse LIKE "%vida%") AND rating > 7;
