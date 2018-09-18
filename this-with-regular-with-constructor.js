
/********************************************** CONSTRUCTOR FUNCTION ******************************************/

function User(){

    this.name = 'Tarun';
    this.age = 34;

    this.getUser = function() {

        name = 'Tary';
        age = 32;

        /**
         * 
         *  1) "this" will point to "user" Object with name and age properties are set
         *  1) First console.log() will pull values of name / age from "user" Object. "this" here points to 
         *      "user" Object
         *  2) Second console.log() will pull values of name / age defined within the function getUser
         */

        console.log(this);
        console.log(`getUser(this): Name:- ${this.name} and Age: ${this.age}`);
        console.log(`getUser: Name:- ${name} and Age: ${age}`);


    }

}


user = new User();
user.getUser();