enum Role {
    Developer = 'Developer',
    PO = 'PO',
    Technician = 'Technician',
    Sales = 'Sales',
}


const Employee: {
    name: string,
    salary: number,
    role: Role,
} = {
    name: 'Luke',
    salary: 35000,
    role: Role.Developer
}


console.log(Employee);
