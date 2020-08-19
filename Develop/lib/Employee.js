// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error ("Expected a non-empty string in name");
        } 

        this.name = name;
        this.id = id;
        this.email = email;
    }

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


    getRole() {
        //it will return what this object functionally is --string "employee"
        return "Employee";
    }
}

module.exports = Employee;


