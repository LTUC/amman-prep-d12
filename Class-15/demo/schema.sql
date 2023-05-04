DROP TABLE IF EXISTS favRecipe;


CREATE TABLE IF NOT EXISTS favRecipe (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    summary VARCHAR(255),
    mins VARCHAR(255)
);