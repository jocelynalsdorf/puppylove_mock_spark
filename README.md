#Puppy love mockup Spark Many-to-Many and postgres/psql
<h3>Author:</h3>
Jocelyn Alsdorf

<h3>Description:</h3>
This app facilates puppy love via a dog dating site. Data is persisted via postgres/psql. Joing table and join statements used for many-to-many relationships. This is the mockup


<h2>Setup instructions:</h2>
Dependencies:
Spark
Gradle
Java 
Testing Suite:
Junit
FluentLenium



---------
In PSQL:
CREATE DATABASE puppy_love;

CREATE TABLE dogs (id serial PRIMARY KEY, name varchar, age int, interests varchar, status varchar, avatar varchar);

CREATE TABLE owners (id serial PRIMARY KEY, description varchar, contact_info varchar);

CREATE TABLE matches (id serial PRIMARY KEY, dog1_id int, dog2_id int);


<h2>Copyright</h2>
MIT License. Copyright 2015  Jocelyn Alsdorf