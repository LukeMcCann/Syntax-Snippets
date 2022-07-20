CREATE FUNCTION generate_random_name (masculine boolean DEFAULT true)
    RETURNS table (
        firstName text,
        lastNAme text
) AS $$
    BEGIN
       RETURN QUERY SELECT
            CASE WHEN masculine
                THEN arrays.masculine_firstnames[s.a % ARRAY_LENGTH(arrays.masculine_firstnames,1) + 1]
                ELSE 'test'
            END AS firstname,
            arrays.lastnames[s.a % ARRAY_LENGTH(arrays.lastnames,1) + 1] AS lastname
        FROM     generate_series(1,300) AS s(a) -- number of names to generate
        CROSS JOIN(
            SELECT ARRAY[
            'Adam','Bjorn','Bob','Calvin','Donald','Dwight','Frank','Fred','George','Howard',
            'James','John','Jacob','Jack','Martin','Harald','Kane','Michael',
            'Paul','Peter','Phil','Roland','Ronald','Samuel','Steve','Thor','Warren','William'
            ] AS masculine_firstnames,
            ARRAY[
            'Andrea','Angela','Arya','Anna','Barbara','Betty','Caroline','Crystal','Katherine','Kate',
            'Lagertha','Hilda','Hela','Aphrodite', 'Astrid','Frida','Freya','Estrid',
            'Gudrun','Sif','Tora','Tove','Yrsa','Ulfhild','Åse','Revna','Inga','Gertrud'
            ] AS feminine_firstnames,
            ARRAY[
                'Matthews','Smith','Jones','Davis','Jacobson','Williams','Donaldson','Maxwell','Peterson','Stevens',
                'Franklin','Hadrada','Jefferson','Odinson','Jackson','Johnson','Lincoln','Grant','Fillmore','Harding','Taft',
                'Truman','Nixon','Ford','Carter','Reagan','Bush','Clinton','Hancock', 'Ironside', 'Lothbrok'
            ] AS lastnames
        ) AS arrays;
    END
$$ LANGUAGE plpgsql;
