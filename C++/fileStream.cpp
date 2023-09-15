#include <iostream>
#include <fstream>

using namespace std;

int main() {
    int myInt, myInt2, myInt3;
    string filename;

    cout << "FileName: ";
    cin >> filename;

    ifstream myStream;
    myStream.open(filename);

    myStream >> myInt >> myInt2 >> myInt3;
    cout << myInt << myInt2 << myInt3 << endl;

    myStream.close();

    return 0;
}
