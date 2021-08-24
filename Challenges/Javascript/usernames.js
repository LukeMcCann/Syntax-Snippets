// Write a function that filters an array of Usernames into a new array containing only
// those userNames with a length < 10.

const validUserNames = (userNames) => {
    return userNames.filter(userName => {
        if (userName.length < 10) {
            return userName;
        }
    });  
};
