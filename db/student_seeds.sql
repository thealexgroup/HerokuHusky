use husky_db;

CREATE TABLE students (
	student_Id VARCHAR(255) PRIMARY KEY NOT NULL,
	student_Email VARCHAR(255) NOT NULL,
	student_Name VARCHAR(255) NOT NULL,
	student_Hour INT(1) NOT NULL,
	student_TeacherName VARCHAR(255) NOT NULL,
	initial_Parent INT(3),
	first_Mate INT(3),
	first_Offspring INT(3),
	first_Genotype VARCHAR(10),
	first_HuskyImage VARCHAR(10),
	first_createdAt DATETIME,
	second_Mate INT(3),
	second_Offspring INT(3),
	second_Genotype VARCHAR(10),
	second_HuskyImage VARCHAR(10),
	second_createdAt DATETIME,
	third_Mate INT(3),
	third_Offspring INT(3),
	third_Genotype VARCHAR(10),
	third_HuskyImage VARCHAR(10),
	third_createdAt DATETIME,
	fourth_Mate INT(3),
	fourth_Offspring INT(3),
	fourth_Genotype VARCHAR(10),
	fourth_HuskyImage VARCHAR(10),
	fourth_createdAt DATETIME,
	fifth_Mate INT(3),
	fifth_Offspring INT(3),
	fifth_Genotype VARCHAR(10),
	fifth_HuskyImage VARCHAR(10),
	fifth_createdAt DATETIME,
	sixth_Mate INT(3),
	sixth_Offspring INT(3),
	sixth_Genotype VARCHAR(10),
	sixth_HuskyImage VARCHAR(10),
	sixth_createdAt DATETIME,
	seventh_Mate INT(3),
	seventh_Offspring INT(3),
	seventh_Genotype VARCHAR(10),
	seventh_HuskyImage VARCHAR(10),
	seventh_createdAt DATETIME,
	eighth_Mate INT(3),
	eighth_Offspring INT(3),
	eighth_Genotype VARCHAR(10),
	eighth_HuskyImage VARCHAR(10),
	eighth_createdAt DATETIME
);

ALTER TABLE  students ADD UNIQUE (student_Email);

insert into students (student_Id, student_Email, student_Name, student_Hour, student_TeacherName) values ("$2a$04$pi8dEM3ohIkRiEk07qiAoeakQEWGo8kzX2gnBNa2lk5Llc8.ghomW","adams.sarahn@gmail.com","Sarah Adams","1","Smith");
insert into students (student_Id, student_Email, student_Name, student_Hour, student_TeacherName) values ("$2a$04$4JG32gMYdfFhNGu87S0Wg.TXcinYNGzIGDUGJnqgSx1jkUmYfmO4C","katvonallen@gmail.com","Kat Allen","2","Jones");
insert into students (student_Id, student_Email, student_Name, student_Hour, student_TeacherName) values ("$2a$04$0oVlVN844oR7TEe0ghDG1.9K3G0gLi/Ve/KBpSTSG39a10XMqmsmm","ilearnarcheology@aol.com","Mia Hawkins","3","Jones");	
insert into students (student_Id, student_Email, student_Name, student_Hour, student_TeacherName) values ("$2a$04$1zFRhO8vciT9cH2M.LWPp.OUb.bLTJ2QMS64XW0OLJtQqKsZ0JaFG","thealexgroup@hotmail.com","Tim Alex","4","Smith");
insert into students (student_Id, student_Email, student_Name, student_Hour, student_TeacherName) values ("$2a$04$448edPvWrWPUvHV9NmSaXOyl3iLK5Icl5bk5ZtPC/oeJurnsW3.jy","husky_admin@bvnw.edu","Teacher Admin","8","Teachers");

