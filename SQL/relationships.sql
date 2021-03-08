-- Tables are related via IDs
CREATE TABLE orders (
  id INT NOT NULL PRIMARY KEY, 
  order_number INT, 
  customer_id INT,
  product_id INT,
  FOREIGN KEY (customer_id) REFERENCES customers(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);