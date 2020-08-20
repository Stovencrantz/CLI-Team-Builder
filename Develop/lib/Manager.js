// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

//Manager class extends the class of Employee, so we do not have to grab name/id/title again. Adds office

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //we build a constructor in order to store information on individual managers using this blueprint
        super(name, id, email);

        //this grabs office number
        this.officeNumber = officeNumber;
    }
    //inherit getName(), getId(), and getEmail() methods from class Employee

    getOfficeNumber() {
        return this.officeNumber;

    }

    getRole() {
        return "Manager"
    }
}

module.exports = Manager;