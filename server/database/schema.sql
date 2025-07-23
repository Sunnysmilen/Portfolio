CREATE TABLE statut (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
name VARCHAR(255) NOT NULL,
description TEXT NOT NULL
);
INSERT INTO statut (name,description)
VALUES
  ("Disponible immédiatement","Ouverte à de nouvelles opportunités, je mets mes compétences techniques et humaines au service de projets innovants et ambitieux."),
  ("Recherche Alternance","À la recherche d’une entreprise pour m’accompagner dans mon parcours en alternance, je suis prête à m’investir pleinement dans des projets concrets."),
  ("Recherche poste","Motivée et curieuse, je cherche une opportunité professionnelle pour continuer à évoluer en tant que développeuse tout en contribuant activement aux objectifs de l’équipe.");



CREATE TABLE candidat (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
firstname VARCHAR(255) NOT NULL,
lastname VARCHAR(255) NOT NULL,
metier VARCHAR(255) NOT NULL,
description TEXT NOT NULL,
statut_id INT UNSIGNED,
FOREIGN KEY (statut_id) REFERENCES statut(id)
);

INSERT INTO candidat (id, lastname, firstname,metier,description,statut_id)
VALUES
  (1, "DAVID", "Nicole", "Développeuse Web","description de qui je suis mon parcours",1);



CREATE TABLE etudes (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
name VARCHAR(255) NOT NULL,
year VARCHAR(20),
etablissement VARCHAR(255) NOT NULL,
candidat_id INT UNSIGNED,
FOREIGN KEY (candidat_id) REFERENCES candidat(id)
);


CREATE TABLE competences (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
categories VARCHAR(255) NOT NULL
);
INSERT INTO competences (id, categories)
VALUES
  (1, "Frontend"),
  (2, "Backend"),  
  (3, "Design & UX"),
  (4, "Outils productions");



CREATE TABLE technologies (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
name VARCHAR(255) NOT NULL,
logo VARCHAR(255) NOT NULL,
competence_id INT UNSIGNED,
FOREIGN KEY (competence_id) REFERENCES competences(id)
);


CREATE TABLE skills (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
candidat_id INT UNSIGNED,
technologies_id INT UNSIGNED,
FOREIGN KEY (candidat_id) REFERENCES candidat(id),
FOREIGN KEY (technologies_id) REFERENCES technologies(id)
);

CREATE TABLE projets (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
projet VARCHAR(255) NOT NULL,
description TEXT NOT NULL,
skills_id  INT UNSIGNED,
FOREIGN KEY (skills_id) REFERENCES skills(id)
);

