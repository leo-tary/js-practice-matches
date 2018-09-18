
/********************************************** FACTORY FUNCTION ******************************************/

function User() {

    name = 'Tary';  // Points to Global Object
    age = 31;       // Points to Global Object

    // console.log(this);
    return {

        name: 'Tarun',
        age: 34,

        getUser: function () {

            name = 'Tonu';  // Points to Local (Within function)
            age = 32;       // Points to Local (Within function)
            /**
             *  
             *  1) "this" here will point to "user" Object. Outside of return block, "this" will point to "Global"    *         Object
             *  2) First console.log() will pull values from "user" Object
             *  3) Second console.log() will pull values within the function (local to function) else from "Global".
             * 
             */
            console.log(this);
            console.log(`getUser(this): Name:- ${this.name} and Age: ${this.age}`);
            console.log(`getUser: Name:- ${name} and Age: ${age}`);


        }

    }


}


user = User();
user.getUser();
