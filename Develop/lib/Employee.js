// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        //we check that the value of name passed in is a valid string
        if (typeof name !== "string" || !name.trim().length) {
            return console.log("Expected a non-empty string in name");
        } 
        //assign variables equal to the data that is passed in
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //declare some methods
    //all subclasses will have access to these methods
    getName() {
        console.log(`Employee name: ${this.name}`);
        return this.name;
    }

    getId () {
        console.log(`Employee ID: ${this.id}`);
        return this.id;
    }

    getEmail () {
        console.log(`Employee Emial: ${this.email}`)
        return this.email;
    }

    getRole () {
        return "Employee";
    }
}

module.exports = Employee;


