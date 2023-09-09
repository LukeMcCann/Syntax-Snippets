#include <iostream>

using namespace std;

int main() {

  int *myPointer; // Pointer stored on the stack as part of function stack frame
  int *myDynamicPointer = new int; // The new keyword makes this a dynamically allocated
                                  // pointer which is stored on the heap rather than the stack.


  cout << "myPointer: " << myPointer << endl;
  cout << "myPointer Value: " << *myPointer << endl;

  cout << endl;

  cout << "myDynamicPointer: " << myDynamicPointer << endl;
  cout << "myDynamicPointer Value: " << *myDynamicPointer << endl;

  cout << endl;

  // We must always dereference our pointers, removing them from the heap,
  // otherwise we end up with memory leaks.

  // Remember pointers are always simply an address, it does not really matter
  // what type we put before the pointer, we are simply declaring what type
  // we expect to be stored in that address.

  *myPointer = 5; // Deference pointers and store a value in the address it points to.
  *myDynamicPointer = 7;

  cout << "myPointer Value: " << *myPointer << endl;
  cout << "myDynamicPointer Value: " << *myDynamicPointer << endl;

  delete myDynamicPointer; // Deallocate memory from the heap

  return 0;
}
