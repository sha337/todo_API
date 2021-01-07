CREATE DATABASE todo_database;

\c todo_database

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    date DATE DEFAULT CURRENT_DATE,
    priority INT,
    state BOOLEAN
);