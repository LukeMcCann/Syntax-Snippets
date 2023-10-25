#include <iostream>
#include <fstream>
#include <vector>

using namespace std;

struct User {
    string username;
    string password;
};

int main(int argc, char* argv[]) {

    if (argc != 2) {
        cerr << "Usage: " << argv[0] << " <file_path>" << endl;
        return 1;
    }

    const char* filePath = argv[1];

    User u;
    vector<User> userVector;
    ifstream readStream;

    readStream.open(filePath);

    while (readStream >> u.username >> u.password) {
        userVector.push_back(u);
    }

    readStream.close();

    for (int i = 0; i < userVector.size(); i++) {
        cout << "Username: " << userVector[i].username << "\n";
        cout << "Password: " << userVector[i].password << "\n";
    }

    return 0;
}
