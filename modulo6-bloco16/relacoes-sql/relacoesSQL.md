a) Explique o que é uma chave estrangeira
Uma chave estrangeira ou FOREIGN KEY indica que a propriedade(coluna) em questão (na tabela filho) está vinculada a uma PRIMARY KEY na tabela referenciada.
``` 

CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
  comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
  movie_id VARCHAR(255),
  FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

DESCRIBE Rating;

 #b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes
INSERT INTO Rating VALUES 
('001', 'Muito bom', 8, '002');

INSERT INTO Rating VALUES 
  ('002', 'Razoável', 5, '003'),
  ('003', 'ótimo e divertido', 10, '004');

 #c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.
 #Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filho: uma restrição de chave estrangeira falha 
 #(`joy-419728-karla-bolzoni`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (` id`)). 
 #Não foi possível encontrar a chave estrangeira na tabela Movie, propriedade movie_id

INSERT INTO Rating VALUES 
('004', 'Muito seem graça', 4, '001');

  #d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.

ALTER TABLE Movie DROP rating;

 #e)Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.
 #Código de erro: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha (`joy-419728-karla-bolzoni`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (` id`))
 #Não é possível deletar um elemento da tabela referenciada, quando o elemento dela está sendo referenciado na tabela filho.
DELETE FROM Movie WHERE id = "002";

 #Exercício 2
CREATE TABLE MovieCast (
 movie_id VARCHAR(255),
 actor_id VARCHAR(255),
 FOREIGN KEY (movie_id) REFERENCES Movie(id),
 FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

DESCRIBE MovieCast;
#a) Explique, com as suas palavras, essa tabela
# Esta tabela contém duas colunas uma de filme e outra de ator, cada coluna faz referencia a uma coluna da tabela pai/referenciada
# Na tabela MovieCast, a coluna movie_id faz referência a coluna id da tabela Movie e a coluna actor_id faz referência a coluna id da tabela Actor

#b) Crie, ao menos, 6 relações nessa tabela 
INSERT INTO MovieCast VALUES
('002', '001');

INSERT INTO MovieCast VALUES
('002', '002'),
('004', '006'),
('004', '001'),
('003', '005'),
('003', '001');

 #c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query
 #Código de erro: 1452. Não é possível adicionar ou atualizar uma linha filho: uma restrição de chave estrangeira falha (`joy-419728-karla-bolzoni`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (` id`))
 #Não foi possível adicionar uma linha na tabela MovieCast pq não foi possível referenciar a coluna actor_id com coluna ID da tabela Actor.
INSERT INTO MovieCast VALUES ('002', '007');

 #d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query
 # Código de erro: 1451. Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha (`joy-419728-karla-bolzoni`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERÊNCIAS `Actor` (` id`))
 DELETE FROM Actor WHERE id = "001";
 
 #Exercício 3
 #a INEER JOIN RETORNA ALGO QUE COM CERTEZA TEM NA OUTRA TABELA

SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

#b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.
SELECT name, movie_id, rate FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;


##DESAFIO

#a) Escreva uma query que retorne todos os filmes e suas avaliações (com essa avaliação existindo ou não). 
#A sua query deve retornar somente o nome, id, nota do filme e comentário
SELECT name, movie_id, rate, comment FROM Movie
LEFT JOIN Rating ON Movie.id = Rating.movie_id;

 #b) Escreva uma query que retorne todas as relações de elenco, junto com as informações do filme. 
 #A sua query deve retornar o id do filme, título do filme e id do ator
SELECT movie_id, name, actor_id FROM Movie  
INNER JOIN MovieCast ON MovieCast.movie_id = Movie.id;

#c)Escreva uma query que retorne a média das avaliações de todos os filmes agrupada em relação aos filmes (mesmo que ele não tenha sido avaliado ainda)

SELECT AVG(rate), movie_id, name FROM Movie LEFT JOIN Rating ON Movie.id = Rating.movie_id GROUP BY(Movie.id);

#5-B
SELECT m.id as movie_id, m.name, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

SELECT * FROM Rating;

SELECT * FROM Movie;

SELECT * FROM Actor;

SELECT * FROM MovieCast;

```