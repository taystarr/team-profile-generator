const Employee = require('./Employee');

// manager class extension of employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // super keyword used to call constructor of parent class to access parent properties/methods
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    };

    getOfficeNumber() {
        return this.officeNumber;
    };

    // override old role as manager
    getRole() {
        return 'Manager';
    };
};

module.exports = Manager;