do $$
    begin
        for x in 1..5000 loop
            INSERT INTO
                cxm.audio_files (id, b, c, d, e, date, name, h)
            VALUES (
                public.gen_random_uuid(),
                null,
                null,
                null,
                null,
                NOW()::timestamptz,
                concat('Luke Test ', x),
                null);
        end loop;
    end;
$$;
