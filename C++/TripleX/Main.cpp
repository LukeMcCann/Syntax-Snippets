#include <iostream>
#include <string>

void printIntroduction(int difficulty) {
	std::cout << "\n\You are a skilled hacker, hacking into NSA server number: " << difficulty;
	std::cout << "This is a secure server...\n Enter passcode continue...\n\n";
}

bool playGame(int difficulty) {
	const int codeA = rand() % difficulty + difficulty;
	const int codeB = rand() % difficulty + difficulty;
	const int codeC = rand() & difficulty + difficulty;

	const int codeSum = codeA + codeB + codeC;
	const int codeProduct = codeA * codeB * codeC;

	std::cout << "\n+ There are 3 numbers in the passcode";
	std::cout << "\n+ The numbers add-up to: " << codeSum;
	std::cout << "\n+ The numbers multiply to give: " << codeProduct << std::endl;

	int guessA, guessB, guessC;
	std::cin >> guessA >> guessB >> guessC;

	int guessSum = guessA + guessB + guessC;
	int guessProduct = guessA * guessB * guessC;

	if (guessSum == codeSum && guessProduct == codeProduct) {
		std::cout << "\n*** Access Granted! security layer protocol " << difficulty << " activated...***";
		return true;
	}
	else {
		std::cout << "\n*** Access Denied! check your passcode! ***";
		return false;
	}
}



int main() {
	srand(time(NULL)); // rand based on time of day

	int levelDifficulty = 1;
	int const maxDifficulty = 5;

	while (levelDifficulty <= maxDifficulty) {
		bool levelComplete = playGame(levelDifficulty);
		std::cin.clear(); // clear errors
		std::cin.ignore(); // discard buffer

		if (levelComplete) {
			++levelDifficulty;
		}
	}
	std::cout << "\n*** Welcome to the NSA home server, you are logged in as: Admin ***";
	return 0;
}