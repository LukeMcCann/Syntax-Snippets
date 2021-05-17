<?php 

function ohmsLaw($v, $r, $i) {
  if (count(array_filter([$v, $r, $i], function($val){
   return $val == "";
  })) !== 1) return "Invalid";
  else 
    return $v === "" ? $r * $i : ($r === "" ? round($v / $i, 2) : round($v / $r, 2));
}

class OhmsLaw extends TestCase
{
	public function tests()
	{
		$this->assertEquals(ohmsLaw(12, 220, ''), 0.05);
		$this->assertEquals(ohmsLaw(230, '', 2), 115);
		$this->assertEquals(ohmsLaw('', 220, 0.02), 4.4);
		$this->assertEquals(ohmsLaw('', '', 10), "Invalid");
		$this->assertEquals(ohmsLaw(500, 50, 10), "Invalid");
		$this->assertEquals(ohmsLaw(12, "", ""), "Invalid");
	}
}
