// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO($s) {
  $text = strtolower($s);
  return substr_count($text, 'x') - substr_count($text, 'o') === 0;
}

class MyTestCases extends TestCase
{
    public function testSampleTests() {
      $this->assertEquals(true, XO('xo'));
      $this->assertEquals(true, XO('XO'));
      $this->assertEquals(true, XO('xo0'));
      $this->assertEquals(false, XO('xxxoo'));
      $this->assertEquals(true, XO("xxOo"));
    }
}
