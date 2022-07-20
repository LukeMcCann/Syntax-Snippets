CREATE OR REPLACE FUNCTION generate_generic_interactions_data(
    arg1_min int DEFAULT 1,
    arg1_max int DEFAULT 100,
    arg3_min int DEFAULT 1,
    arg3_max int DEFAULT 100
) RETURNS void AS $$
    DECLARE
       var1 timestamptz := (select NOW() + (random() * (NOW()+'-30 days' - NOW())) + '-30 minutes');
       var2 timestamptz := (select var1 + (random() * (NOW()+'-29 minutes' - NOW())) + '-1 minutes');
    BEGIN
        for x in arg1_min..arg1_max loop
            insert into schema.table (
                /* ...columns
            ) VALUES (
                /* ...values
            );
       end loop;

       /* mass update a pivot table
       insert into schema.pivotTable (item1_id, item2_id)
           (
               select distinct item1_id, item2_id
               from schema.item1
                   cross join schema.item2
               where 1=1
               AND item1.id not in (
                   select item1_id from schema.pivotTable
               )
           );

       for x in interaction_min..interaction_max loop
           RAISE NOTICE 'Generating...';
            insert into cxm.interactions (
                /* ...columns
            ) VALUES (
               /* ...values
            );
        end loop;
    END
$$ LANGUAGE plpgsql;
