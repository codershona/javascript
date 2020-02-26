// 1 .Understanding let & const :
// 1 .let & const :-------------------------

   // 1 .Var ---> let + const

   // 1. let = variable values

   // 1. const = constant values
  // EXAMPLE below :


// let myName = 'Max';
// console.log(myName);

// const myName = 'Max';
// console.log(myName);
//
// myName = 'Manu';
// console.log(myName);



// 2. Arrow Functions : -----------------

  // function myFnc() {
  //   .....
  // }

  // const myFnc = () => {
  //   ....
  // }

// Example 1 :
  // function printMyName(name) {
//   console.log(name);
// }

// printMyName('Maxx');


// Example 2 :

// const printMyName = (name) => {
//   console.log(name);
// }
//
// printMyName('Maxx');


// Example 3 :

// const printMyName = (name, age) => {
//   console.log(name, age);
// }

// printMyName('Maxx', 60);

// Example 4 :
// const multiply = (number) => {
//   return number * 2;
// }
//
// console.log(multiply(2));


// Example 5 :

// const multiply = (number) => number * 2;
//
//
// console.log(multiply(2));



//3. Exports & Imports(Modules) :----------------

    // a. person.js :                                     // b. utility.js :
        // const person = {                            // export const clean =() => {...}
    // name: 'Max'                                  // export const baseData = 10;
      // }
      //export default person

              // person.js + utility.js = app.js

        // app.js =
          // import person from './person.js'
          //import prs from './person.js'

          // import { baseData } from './utility.js'
          // import { clean } from './utility.js'

// NOTE : Imports default and ONLY export of the file Name in the receiving file is up to you.


 // default export :
     // import person from './person.js'
     // import prs from './person.js'

// named export :

    // import { smth } from './utility.js'
    // import { smth as Smth } from './utility.js'
    // import*as bundled from './utlity.js'

// NOTE : You choose the name / Name is defined by export.


//4. Classes :----------------


// class Person {
  // name = 'Max'    --------> PROPERTY
  // call = () => {...}   --------> Method
//  }



    // Usage: (constructor functions anyone?)
     // const myPerson = new Person()
     // myPerson.call()
     // console.log(myPerson.name)


  // Inheritance: (prototypes anyone?)

     // class Person extends Master



     // Example 1 :


// class Person {
//   constructor() {
//     this.name = 'Lily';
//   }
//   printMyName() {
//     console.log(this.name);
//   }
// }
//
// const person = new Person();
// person.printMyName();



// Example 2 :

// class Human {
//   constructor() {
//     this.gender = 'male';
//   }
//   printGender() {
//     console.log(this.gender);
//   }
// }
// class Person extends Human {
//   constructor() {
//     super();
//     this.name = 'Lily';
//   }
//   printMyName() {
//     console.log(this.name);
//   }
// }
//
// const person = new Person();
// person.printMyName();
// person.printGender();




// Example 3 :

//
// class Human {
//   constructor() {
//     this.gender = 'male';
//   }
//   printGender() {
//     console.log(this.gender);
//   }
// }
// class Person extends Human {
//   constructor() {
//     super();
//     this.name = 'Lily';
//     this.gender = 'female';
//   }
//   printMyName() {
//     console.log(this.name);
//   }
// }
//
// const person = new Person();
// person.printMyName();
// person.printGender();




// 5. Classes, Properties & Methods : ----------

// A. Properties are like "variables attached to classes/objects"
    // - ES6 :
    // constructor() {
    // this.myProperty = 'value'
  // }

// - ES7 :
// myproperty = 'value'


// B. Methods are like "functions attached to classes/objects"

   // - ES6 :
   // myMethod() {...}

   // - ES7 :
     // myMethod = () => {...}


    //Example 1 : ES6/Babel :
//     class Human {
//    gender = 'male';
//
//   printGender = () => {
//     console.log(this.gender);
//   }
// }
// class Person extends Human {
//     name = 'Lily';
//     gender = 'female';
//
//   printMyName = () => {
//     console.log(this.name);
//   }
// }
//
// const person = new Person();
// person.printMyName();
// person.printGender();


   // 6. Spread & Rest Operators :
        //   ...

    // 1. Spread :
        // Used to split up array elements OR object properties.
     // const new Array = [...oldArray,1,2]
     // const newObject = {...oldObject, newProp:5}


     // 2. Rest :

     // Used to merge a list of function arguments into an array .
     // function sortArgs(...args){
     // return args.sort()
   // }

 // ES6/Babel :
    // Example 1 :
   // const numbers = [1,2,3];
// const newNumbers = [...numbers, 4];
//
// console.log(newNumbers);


//  Example 2 :

// const person = {
//   name: 'Max'
// };
// const newPerson = {
//   ...person,
//   age: 28
// }
//
// console.log(newPerson);


//  Example 3 :

// const filter = (...args) => {
//   return args.filter(el => el ===1);
// }
// console.log(filter(1,2,3));



// 7. Destructuring : -------------


  //Easily extract array elements or object properties and store them in variables.

// Array Destructuring :
// [a,b] = ['Hello','Max']
// console.log(a) // Hello
// console.log(b) //Maxx

// Object Destructuring :
  // {name} = {name: 'Max', age:28}
  // console.log(name) //Max
  // console.log(age)//undefined


  // Example 1 :

  // ES6/Babel :
//
//   const numbers = [1,2,3];
// [num1, num2] = numbers;
// console.log(num1, num2);



// Example 2 :

// const numbers = [1,2,3];
// [num1, , num3] = numbers;
// console.log(num1, num3);


// Reference and Primitive Types Refresher :

// Example 1 :

// const number = 1;
// const num2 = number;
// console.log(num2);

// const person = {
//   name: 'Max'
// };
// const secondPerson = person;
// console.log(secondPerson);


// Example 2 :

// const person = {
//   name: 'Max'
// };
// const secondPerson = person;
// person.name = 'Manika';
// console.log(secondPerson);

// Example 3 :

// const person = {
//   name: 'Max'
// };
// const secondPerson = {
//   ...person
// }
// person.name = 'Manika';
// console.log(secondPerson);


// Refreshing Array Functions :

// ES6/Babel :
// const numbers = [1, 2, 3,];
// const doubleNumArray = numbers.map((num) => {
//   return num * 2;
//
//   });
// console.log(numbers);
// console.log(doubleNumArray);

// 
