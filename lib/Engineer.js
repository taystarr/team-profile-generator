const Employee = require('./Employee');

// manager class extension of employee class
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        // super keyword used to call constructor of parent class to access parent properties/methods
        super(name, id, email);
        this.gitHub = gitHub;
        this.role = 'Engineer';
    };

    getGitHub() {
        return this.gitHub;
    };

    getRole() {
        return 'Engineer';
    };
};

module.exports = Engineer;
