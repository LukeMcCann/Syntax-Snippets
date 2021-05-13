<?php declare(strict_types=1);

function lensort($a,$b){
    $la = strlen( $a); $lb = strlen( $b);
    if( $la == $lb) {
        return strcmp( $a, $b);
    }
    return $la - $lb;
}
