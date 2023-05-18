DROP TABLE IF EXISTS favProducts;


CREATE TABLE IF NOT EXISTS favProducts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    price VARCHAR(255),
    discountPercentage VARCHAR(255),
    rating VARCHAR(255),
    stock VARCHAR(255),
    brand VARCHAR(255),
    category VARCHAR(255),
    thumbnail VARCHAR(255),
    images text[]
);