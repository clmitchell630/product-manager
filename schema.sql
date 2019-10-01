DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
	item_id INTEGER(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100) NULL,
    department_name VARCHAR(100) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INTEGER(10) NULL
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Anti Snoring Smart Pillow", "Bedding", 378.00, 7),
("Men Leather Leisure Wallet", "Mens Apparel", 7.19, 20),
("Kradl Bike Mount", "Sporting Goods", 169.00, 11),
("PEN Battle II Fishing Rod", "Sporting Goods", 119.99, 8),
("Have You Seen Luis Valez?", "Books", 7.99, 103),
("Cactus Bath Rug", "Home Goods", 3.45, 18),
("Classy Potato Gift Bundle", "Grocery", 21.99, 3),
("Gusleson Classic Wedding Tie", "Mens Apparel", 5.90, 87),
("Griot Garage Random Orbital Polisher", "Automotive", 149.99, 15),
("Yothg 580mL Leakproof Waterbottle", "Sporting Goods", 9.99, 21);

SELECT * FROM products;


    