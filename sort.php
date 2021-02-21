function cmp( $a, $b ) { 
  if(  $a->weight ==  $b->weight ){ return 0 ; } 
  return ($a->weight < $b->weight) ? -1 : 1;
} 

usort($unsortedObjectArray,'cmp');
