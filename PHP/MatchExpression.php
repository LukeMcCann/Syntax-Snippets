<?php 

$status = 4;
$res = match($status) {
    1 => 'Paid',
    2 => 'Declined',
    0,3 => 'Pending',
    default => 'Unknown Payment Status',
};

echo $res;
