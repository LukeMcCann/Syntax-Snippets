class Department {
    protected employees: string[] = [];

    constructor(
        private readonly id: number,
        public name: string,
    ) {}

    describe(this: Department) : void {
        console.log(`Department (${this.id}: ${this.name})`);
    }

    addEmployee(this: Department, name: string) : void {
        this.employees.push(name);
    }

    printEmployeeInformation() : void {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    constructor(
        id: number,
        public admins: string[]
    ) {
        super(id, 'IT');
    }
}

class Accounting extends Department {
    constructor(
        id: number,
        private reports: string[],
    ) {
        super(id, 'Accounting');
    }

    addEmployee(this: Accounting, name: string): void {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }

    addReport(this: Accounting, text: string) : void {
        this.reports.push(text);
    }

    printReports(this: Accounting) : void {
        console.log(this.reports);
    }
}

const IT = new ITDepartment(12312, ['Jon', 'Rob']);
const ACCOUNTS = new Accounting(1123, []);

console.log(IT);

ACCOUNTS.addReport('Something broke!');
ACCOUNTS.printReports();
