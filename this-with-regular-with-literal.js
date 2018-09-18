
/********************************************** OBJECT LITERAL ******************************************/

const user = {

    name: 'Tarun',
    age: 34,

    getUser: function () {

        name = 'Tary';
        age = 32;

        /**
         * 
         *  1) "this" will point to "user" Object
         *  2) First console.log() will pull values from "user" Object itself
         *  3) Second console.log() will pull values from within the function getUser()
         * 
         */


        console.log(this);
        console.log(`getUser (this): Name:- ${this.name} and Age: ${this.age}`);
        console.log(`getUser: Name:- ${name} and Age: ${age}`);


    }


}

user.getUser();