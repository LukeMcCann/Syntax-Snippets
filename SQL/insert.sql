INSERT INTO products 
VALUES (
  1, 
  "Schecter Demom-7",
  500.20
);

-- Alternate Syntax

-- Allows to specify only particular fields, allowing you to ignore
-- Auto incremented columns
INSERT INTO products (name, price)
VALUES (
    "Schecter Silver Mountain C8",
    1326.34
);















-- In this case we don't have an AI ID yet
INSERT INTO products (id, name, price)
VALUES (
  	2,
    "Schecter Silver Mountain C8",
    1326.34
);