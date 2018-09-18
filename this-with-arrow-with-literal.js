
/********************************************** OBJECT LITERAL ******************************************/
const user = {

    name: 'Tarun',
    age: 34,

    getUser: () => {
        // this.name = 'Tonu';
        name = 'Tary';
        age = 35;

        /**
         * 
         *  1) "this" in arrow functions binds context lexically. With Object Literals, => functions don't have "this" 
         *      Here, it'll be "blank Object". Adding this.name / this.age will make them available via 
         *      "Window / Global" Object; But is it apt to add them to Global Object? NO
         * 
         *  2) First console.log() will result in undefined values for this.name / this.age as "this" itself is blank.
         *  3) Second console.log() will only results in values if name / age are defined within getUser()
         */

        console.log(this);
        console.log(`getUser (this): Name:- ${this.name} and Age: ${this.age}`);
        console.log(`getUser: Name:- ${name} and Age: ${age}`);
    }

}

user.getUser();