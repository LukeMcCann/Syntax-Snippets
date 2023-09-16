#include <iostream>
#include <fstream>
#include <string>

using namespace std;

void initializeStorage() {

}

int main(int argc, char* argv[]) {

    if (argc != 2) {
        cout << "usage: ./main.cpp <inputfilename>" << endl;
        exit(-1);
    }

    int size;
    int value;
    int position_count = 0;
    ifstream myStream;

    myStream.open(argv[1]);
    myStream >> size;

    int* myArr = new int[size];

    while (myStream >> value) {
        myArr[position_count] = value;
        position_count++;
    }

    myStream.close();

    for (int i = 0; i < size; i++) {
        cout << myArr[i] << " ";
    }
    delete[] myArr;

    return 0;
}
