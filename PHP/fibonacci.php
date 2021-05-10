<?php 
function fib($num) {
	$res=[0, 1];
	for($i=2;$i<=$num;$i++){
		$res[$i]=$res[$i-1]+$res[$i-2];
	}
	return $res[$num];
}
                          
function fibRecursive($num) {
  if ($num < 2) return $num;   
  return fibRecursive($num - 1) + fibRecursive($num -2);
}
