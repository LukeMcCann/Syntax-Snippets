<?php 

$status = 1;
match($status) {
    1 => print 'Paid',
    2 => print 'Declined',
    0 => print 'Pending',
};
