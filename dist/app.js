"use strict";
// const element= <HTMLInputElement>document.getElementById('num1')!
// element.value
//GENERICS
// use to pass or assigned additional info in typescript
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("done");
    }, 2000);
});
promise.then((data) => {
    data.split(" ");
});
// helping function
function merge(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
const merged = merge({ name: " Shahzaib" }, { age: 22 });
console.log(merged.age);
// DECORATORS
function Logger() { }
class Person {
    constructor() {
        this.name = "Shahzaib";
        console.log("called...!");
    }
}
