DROP DATABASE IF EXISTS photo_gallery;

CREATE DATABASE photo_gallery;

USE photo_gallery;

CREATE TABLE IF NOT EXISTS PhotosTwo (
  id int NOT NULL AUTO_INCREMENT,
  listing_id INT,
  listingName VARCHAR(180),
  is_favorite BOOLEAN,
  photo1_a VARCHAR(65),
  photo1_b VARCHAR(65),
  photo1_caption VARCHAR(150),
  photo2_a VARCHAR(65),
  photo2_b VARCHAR(65),
  photo2_caption VARCHAR(150),
  photo3_a VARCHAR(65),
  photo3_b VARCHAR(65),
  photo3_caption VARCHAR(150),
  photo4_a VARCHAR(65),
  photo4_b VARCHAR(65),
  photo4_caption VARCHAR(150),
  photo5_a VARCHAR(65),
  photo5_b VARCHAR(65),
  photo5_caption VARCHAR(150),
  photo6_a VARCHAR(65),
  photo6_b VARCHAR(65),
  photo6_caption VARCHAR(150),
  photo7_a VARCHAR(65),
  photo7_b VARCHAR(65),
  photo7_caption VARCHAR(150),
  photo8_a VARCHAR(65),
  photo8_b VARCHAR(65),
  photo8_caption VARCHAR(150),
  photo9_a VARCHAR(65),
  photo9_b VARCHAR(65),
  photo9_caption VARCHAR(150),
  photo10_a VARCHAR(65),
  photo10_b VARCHAR(65),
  photo10_caption VARCHAR(150),
  PRIMARY KEY(id)




);