select * from alunos;

insert into alunos (matricula, nome, dataNasc, email) values
("2026001", "Wesley Gomes", "1990-05-06","wesley@email.com"),
("2026002", "Kelly Cristina", "1983-09-03", "kelly@email.com");

update alunos set nome = "Wesley Carvalho" where id  = 1;

delete from alunos where id = 2;

select * from cursos;

insert into cursos (nome, codigo, qtd_semestres) values
("Banco de Dados", "2026001", "06"),
("Redes", "2026002", "06");

