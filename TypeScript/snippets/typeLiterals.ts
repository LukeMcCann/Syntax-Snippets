type Role = 'engineer' | 'po' | 'sales';

const greetNewEmployee = (role: Role) => {
    switch(role) {
        case 'engineer':
            return console.log('Wow! a new Engineer! Hi!');
        case 'po':
            return console.log('Welcome! we needed a new PO!');
        case 'sales':
            return console.log('Welcome to the team! hope you meet your targets!');
        default:
            console.log('Welcome to the team!');
    }
}

greetNewEmployee('engineer');
greetNewEmployee('sales');
