const Employee = require('./Employee');

// manager class extension of employee class
class Intern extends Employee {
    constructor(name, id, email, school) {
        // super keyword used to call constructor of parent class to access parent properties/methods
        super(name, id, email);
        this.school = school;
        this.role = 'Intern';
    };

    getSchool() {
        return this.school;
    };
    
    // currently returns employee per test, override to return intern
    getRole() {
        return 'Intern';
    };
};

module.exports = Intern;