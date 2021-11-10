create function test(
    doStuff bool DEFAULT true
)
    returns text[] as
    $$
        declare
            v_test_array text[] := ARRAY[]::text[];
        begin

            if (doStuff) then
                v_test_array := array_append(v_test_array, 'It Worked');
            else
                v_test_array := array_append(v_test_array, 'Failure');
            end if;


            return v_test_array::text[];
        end;
    $$
    language plpgsql;

select * from test(false);
