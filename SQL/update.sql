-- Update Values
UPDATE products 
SET price = 543
WHERE name = "Schecter Demon-7";

UPDATE products
SET stock = 12 
WHERE id = 2;

-- Update Table
ALTER TABLE products
ADD stock INT;

