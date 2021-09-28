<?php 

// There are two ways of defining constants in PHP
// using either the const keyword, the newer way, 
// or the old way of using the define function.

// These two differ in their execution. 
// While define() defines the constant upon
// the method call at runtime, the const keyword
// is defined at compile time.

define('NAME', 'Martin'); // defined at runtime

const NEWNAME = 'Sasha'; // defined at compile time
