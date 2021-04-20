<?php 

function makePlusFunction($baseNum) {
                return function($input) use ($baseNum) {
                                return $input + $baseNum;
                };
}
