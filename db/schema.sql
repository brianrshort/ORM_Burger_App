
-- In case you have a competing database of the same name, drop the old one 
DROP DATABASE IF EXISTS burger_city_db;

-- Create a burger city database and use it to create a new table 
CREATE DATABASE burger_city_db;

USE burger_city_db;

-- Create the table to collect the burgers.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger varchar(255) NOT NULL,
  devoured BOOLEAN default false,
  PRIMARY KEY (id)
);


