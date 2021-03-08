CREATE DATABASE products (
    id INT NOT NULL PRIMARY KEY, 
    name STRING,
    price MONEY
);

-- Alternative Syntax
CREATE DATABASE products (
    id INT NOT NULL, 
    name STRING,
    price MONEY,
    PRIMARY KEY (id)
);
