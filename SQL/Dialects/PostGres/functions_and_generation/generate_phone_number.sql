CREATE FUNCTION generate_phone_Number ()
    RETURNS table (
        phone_number text
) AS $$
    BEGIN
       RETURN QUERY SELECT format('+44%s%s%s%s %s%s%s %s%s%s'
        , a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11])
       FROM  (
          SELECT ARRAY (
             SELECT trunc(random() * 10)::int
             FROM   generate_series(1, 10)
             ) AS a
       ) phone_number;
    END
$$ LANGUAGE plpgsql;
