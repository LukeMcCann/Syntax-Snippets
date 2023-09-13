#include <iostream>

using namespace std;

int main() {
    int rows, cols;

    cout << "Enter the number of rows: ";
    cin >> rows;

    cout << "Enter the number of columns: ";
    cin >> cols;

    // Create a dynamic 2D array
    int **multTable = new int *[rows];
    for (int i = 0; i < rows; i++) {
        multTable[i] = new int[cols];
    }

    // Populate the table (for demonstration, filling with example values)
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            multTable[i][j] = (i + 1) * (j + 1);
        }
    }

    // Print the table
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            cout << multTable[i][j] << "\t"; // Use "\t" for tab spacing
        }
        cout << endl; // Move to the next row
    }

    // Deallocate memory
    for (int i = 0; i < rows; i++) {
        delete[] multTable[i];
    }
    delete[] multTable;

    return 0;
}
