// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./employee");

//Manager class extends the class of Employee, so we do not have to grab name/id/title again. Adds office

class Manager extends Employee {
    constructor(name, id, email, office) {
        //we build a constructor in order to store information on individual managers using this blueprint

        // super calls employee
        super(name, id, email);

        //this grabs office number
        this.office = office;
    }

    getOfficeNum() {
        return this.office;

    }

    getRole() {
        return "Manager"
    }
}

module.exports = Manager;