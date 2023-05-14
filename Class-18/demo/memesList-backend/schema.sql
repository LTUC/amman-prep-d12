DROP TABLE IF EXISTS favMemes;


CREATE TABLE IF NOT EXISTS favMemes (
    id SERIAL PRIMARY KEY,
    bottomText VARCHAR(255),
    image_path VARCHAR(255),
    meme_name VARCHAR(255),
    rank VARCHAR(255),
    tags VARCHAR(255),
    topText VARCHAR(255)
);
