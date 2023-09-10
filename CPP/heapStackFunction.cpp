#include <iostream>

using namespace std;

int *myHeapFunction() {
  int *localValue = new int(5);
  return localValue;
}

// Running this will produce a warning but compile successfully.
// Since each function creates its own stack frame
// and the content of the function exist within it's own stack frame
// when we come to reference the address later it may no longer exist.
int *myStackFunction(int *pointerValue) {
  *pointerValue = 20;
}

int main() {
  int *mainPointer = myHeapFunction();

  cout << *mainPointer << endl;
  *mainPointer = 540;

  cout << *mainPointer << endl;

  return 0;
}
