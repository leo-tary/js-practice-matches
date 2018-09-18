
/********************************************** FACTORY FUNCTION ******************************************/

function User(userId){

    // "this" here will point / context to Window (browser) / Global (Node) Object 
    // console.log(this);

    name = 'Tarun';
    age = 34;

    return {
        // These properties are set within "user" Object
        name: 'Tarun',
        age: 35,
        getUser: () => {
            // FIRST COMMENT name / age ABOVE AND UN-COMMENT BELOW

            // These properties will override values set within "Window" Object set above (outside of return)
            name = 'Tarun';
            age = 33;

            /**
             * 
             *  1) "this" here will point to "Window" Object (Binds Context Lexically to "Window / Global" Object)
             *  2) First console.log values are pulled from "Window / Global" object (hence "this" is used)
             *  3) Second console.log values are pulled directly from "Global" Object
             *  4) Summary (Variable defined):- 
             *          a) Within function will point to "Window" Object
             *          b) Outside function, but within return will point to "user" Object ("user" Object will be defined within "Window" Object)
             *          c) Outside return will point to "Window" Object
             */
            console.log(this);
            console.log(`getUser(this): Name:- ${this.name} and Age: ${this.age}`); 
            console.log(`getUser: Name:- ${name} and Age: ${age}`); 
            console.log(`getUser(this.user): Name:- ${this.user.name} and Age: ${this.user.age}`);

        }

    }

}


user = User(7);
user.getUser();
// user.getValues;