// This is my first Javascript
// console.log("Hello Javascript");


// let name = "Mosh" ;
//  let name = "Mosh" ;
// console.log(name);

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with number (1 name)
// Cannot contain a space or hyphen (-)
// Are case senesitive

// let firstName = "Mosh";
// let lastName = "Hamdani";
// Variables :

// let interestRate = 0.3;
// const interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

// Primitive types :
// Primitive/Value types + Reference types
// Primitive/Value types : String + Number + Boolean + Undefined + null


// let name = "Mosh"; // String Literal
// let age = "35"; // Number Literal
// let isApproved = false; // Boolean Literal
// let firstName = undefined;
// // let lastName = null;
// let selectedColor = null;


// DYNAMIC TYPING:

// Static = (Statically-typed) : string name = 'JOHN';
//Dynamic = (Dynamically-typed) : let name = 'JOHN';

// let name = "Mosh"; // String Literal
// let age = "30"; // Number Literal
// let isApproved = false; // Boolean Literal
// let firstName = undefined;
// let selectedColor = null;

// console -- typeof age/ typeof number/ typeof isApproved/ typeof firstName


// OBJECTS :
// Reference TYPES : Object + Array + Function
// let person = {
//    name: 'Mosh',
//    age: 30
// };
//
// // DOT NOTATION
// person.name = 'JOHN';
//
// // BRACKET NOTATION
// let selection = 'name';
// // person['name'] = 'Mary';
// person['selection'] = 'Mary';
// console.log(person.name);

// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 1;
// console.log(selectedColors.length);


// FUNCTIONS :
// function greet(name) {
//   console.log("Hello Javascript");
// }
//
// greet();

// function greet(name,lastName) {
//   console.log('Hello ' + name + '' + lastName );
// }
//
// // greet('Javascripts');
// // greet('Marya');
// greet('Marya ', 'Smith');

// Types Of Function :


// performing a task
function greet(name,lastName) {
  console.log('Hello ' + name + '' + lastName );
}

// calculating a values()

function square(number) {
return number * number;
}


// greet('Marya ', 'Smith');

// let number = square(2);
// console.log(number);
console.log(square(2));
