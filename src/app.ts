// const element= <HTMLInputElement>document.getElementById('num1')!

// element.value

// ----------GENERICS
// --------- use to pass or assigned additional info in typescript

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("done");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

// ----------helping function

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return { ...objA, ...objB };
// }

// const merged = merge({ name: " Shahzaib" }, { age: 22 });
// console.log(merged.age);

// ------------DECORATORS

function Logger() {
    console.log("Logging....!")
}

class Person {
  name = "Shahzaib";

  constructor() {
    console.log("called...!");
  }
}

const shahzaib= new Person()
