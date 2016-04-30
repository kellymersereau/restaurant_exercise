CREATE DATABASE hotrestaurant;
USE hotrestaurant;
CREATE TABLE customers(
 id int AUTO_INCREMENT, 
 customer_name VARCHAR(30),
 customer_email VARCHAR(30), 
 phone_number VARCHAR(30),
 PRIMARY KEY(id)
);

CREATE TABLE reservations(
  id int AUTO_INCREMENT, 
  customer_id int,
  PRIMARY KEY(id)
);

CREATE TABLE waitings(
  id int AUTO_INCREMENT, 
  customer_id int,
  PRIMARY KEY(id)
);