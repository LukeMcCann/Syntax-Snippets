<?php
// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

function angle(int $n): int {
  return abs(($n-2) * 180);
}
