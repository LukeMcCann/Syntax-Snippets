#include <iostream>
#include <string>

using namespace std;

int main(int argc, char **argv) {

  int value = 10;

  cout << "Value: " << value << endl;

  int *valuePtr = &value;

  cout << "ValuePointer: " << valuePtr << endl;

  cout << "Dereferenced: " << *valuePtr << endl;

  return 0;
}
