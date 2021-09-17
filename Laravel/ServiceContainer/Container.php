<?php 

namespace App;

protected $bindings = [];

class Container {
  public function bind($key, $value) {
     $this->bindings($key) = $value;
  }
}
