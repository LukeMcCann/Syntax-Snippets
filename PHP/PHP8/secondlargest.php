<?php 

function secondLargest($a) {
	rsort($a);
	return $a[1];
}
