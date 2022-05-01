class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    };

    // get name of employee
    getName() {
        return this.name;
    };

    // get employee id number
    getId() {
        return this.id;
    };

    // get employee email
    getEmail() {
        return this.email;
    };

    // always return role as employee
    getRole() {
        return 'Employee';
    };
};

module.exports = Employee;
