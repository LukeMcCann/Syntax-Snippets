<?php

function test(int $test1, array $test2) {
    return func_get_args();
}

print_r(test(123, [1,2,3]));

function test2(int $test1, array $test2) {
    return func_get_arg(1);
}

print_r(test2(123, [1,2,3]));

function test3(int $test1, array $test2) {
    return func_num_args();
}

print_r(test3(123, [1,2,3]));
