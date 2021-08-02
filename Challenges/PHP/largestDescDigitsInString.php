<?php

function solution($s) {
    return (int) implode('', array_slice(sortStrDesc($s), 0, 5));
}

function sortStrDesc($s) {
    $s_arr =  str_split($s);
    if (sizeof($s_arr) < 2) return (int) $s;
    rsort($s_arr, SORT_NUMERIC);
    return $s_arr;
}

echo solution('12313123931381361327313');
