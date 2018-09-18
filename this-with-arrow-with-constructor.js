
/********************************************** CONSTRUCTOR FUNCTION ******************************************/

function User(userId) {


    this.name = 'Tarun';
    this.age = 34;

    let display = 'Tonu';   // Private Property

    this.getUser = () => {

        name = 'Tary';
        age = 35;

        /**
         * 
         *  1) "this" will point to "user" Object with name and age properties are set
         *  1) First console.log() will pull values of name / age from "user" Object. "this" here points to 
         *      "user" Object
         *  2) Second console.log() will pull values of name / age defined within the function getUser
         */

        console.log(this);  // user Object
        console.log(`getUser (this): Name:- ${this.name} and Age: ${this.age}`);
        console.log(`getUser: Name:- ${name} and Age: ${age} and Display: ${display}`); // Accessing Private Property

    }


}



user = new User(7); // user Object
user.getUser();