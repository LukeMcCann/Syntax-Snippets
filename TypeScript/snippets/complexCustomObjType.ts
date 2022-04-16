type User = {
    name: string,
    password: string,
};

const signUp = (username, password) => {
    const newUser: User = {
        name: username,
        password: password,
    };

    // update database, encrypt password

    console.log(`User ${newUser.name} created successfully!`);
}

signUp('Rick', 'P1cKl3R1ck!');
