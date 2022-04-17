type Admin = {
    name: string;
    privileges: string[]
}

type Employee = {
    name: string,
    startDate: Date,
}

type ElevatedEmployee = Admin & Employee;


interface Manager {
    name: string,
    privileges: string[],
}

interface SalesRep {
    name: string,
    startDate: Date,
}

interface PromotedSalesRep extends Manager, SalesRep {}
