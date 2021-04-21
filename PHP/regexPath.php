function possiblePath($arr) {
    if (sizeof($arr) < 2) return false;
    
    $pathString = implode('', $arr);
    preg_match('/^(([1-4]{1}+H{1})|(H{1}+[1-4]{1})).*/', $pathString, $matches);
    
    return empty($matches) ? 'false' : 'true';
}
