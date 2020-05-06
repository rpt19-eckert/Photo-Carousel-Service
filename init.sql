DROP DATABASE IF EXISTS photo_gallery;

CREATE DATABASE photo_gallery;

\c photo_gallery;

-- DROP TABLE photostwo;

CREATE TABLE PhotosTwo (
  id SERIAL PRIMARY KEY,
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
  photo10_caption VARCHAR(150)
);


-- INSERT into PhotosTwo (listing_Id, listingName, is_favorite, photo1_a, photo1_b, photo1_caption, photo2_a, photo2_b, photo2_caption, photo3_a, photo3_b, photo3_caption, photo4_a, photo4_b, photo4_caption, photo5_a, photo5_b, photo5_caption, photo6_a, photo6_b, photo6_caption, photo7_a, photo7_b, photo7_caption, photo8_a, photo8_b, photo8_caption, photo9_a, photo9_b, photo9_caption, photo10_a, photo10_b, photo10_caption) VALUES (10001, 'Exercitationem_vero_itaque_iste', '0','https://i.picsum.photos/id/155/1440/960.jpg', 'https://i.picsum.photos/id/155/720/455.jpg', 'Voluptates minus quas.', 'https://i.picsum.photos/id/157/1440/960.jpg', 'https://i.picsum.photos/id/157/720/455.jpg', 'Alias eveniet impedit ducimus laboriosam.', 'https://i.picsum.photos/id/194/1440/960.jpg', 'https://i.picsum.photos/id/194/720/455.jpg', 'Nisi in perspiciatis.', 'https://i.picsum.photos/id/180/1440/960.jpg', 'https://i.picsum.photos/id/180/720/455.jpg', 'Quia voluptatem voluptatem delectus quidem.', 'https://i.picsum.photos/id/183/1440/960.jpg', 'https://i.picsum.photos/id/183/720/455.jpg', 'Qui architecto quae magnam consectetur fuga necessitatibus harum.', 'https://i.picsum.photos/id/166/1440/960.jpg', 'https://i.picsum.photos/id/166/720/455.jpg', 'Rerum est numquam.', 'https://i.picsum.photos/id/158/1440/960.jpg', 'https://i.picsum.photos/id/158/720/455.jpg', 'Quas aliquid quo.', 'https://i.picsum.photos/id/121/1440/960.jpg', 'https://i.picsum.photos/id/121/720/455.jpg', 'Hic iusto autem qui veniam ipsa quod autem voluptatum.', 'https://i.picsum.photos/id/151/1440/960.jpg', 'https://i.picsum.photos/id/151/720/455.jpg', 'Rerum minus excepturi.', 'https://i.picsum.photos/id/198/1440/960.jpg', 'https://i.picsum.photos/id/198/720/455.jpg', 'Neque veniam sunt molestiae placeat explicabo impedit unde quod.');


COPY photostwo FROM '/Users/yingwenchen/Desktop/HR project/HR_RPT/SDC/jason_FEC_service/db/exampleData.csv' DELIMITER ',';
