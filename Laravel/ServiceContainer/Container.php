<?php 

namespace App;

protected $bindings = [];

class Container {
  public function bind($key, $value) {
     $this->bindings($key) = $value;
  }
  
  public function resolve($key) {
    if (isset($this->bindings[$key])) {
      return call_user_func($this->bindings[$key]);
    }
  }
}
