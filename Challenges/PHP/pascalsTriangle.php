<?php

function fact($n) {
 return $n < 2 ? 1 : $n * fact($n - 1);
}

function pascalsTriangle($row) {
  $arr = [];
  for ($x = 0; $x <= $row; $x++) {
   array_push($arr, round(fact($row) / (fact($x) * fact($row - $x))));
  }
  return join(" ", $arr);
}
