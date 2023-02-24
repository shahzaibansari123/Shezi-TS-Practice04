"use strict";
// const element= <HTMLInputElement>document.getElementById('num1')!
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function Logger(data) {
    return function (_) {
        // console.log(constructor)
        console.log("Logging....=>" + data);
    };
}
function FillHTML(template, id) {
    return function (_) {
        const el = document.getElementById(id);
        if (el) {
            el.innerHTML = template;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = "Shahzaib";
        console.log("called...!");
    }
};
Person = __decorate([
    Logger("data"),
    FillHTML("<b>Template Data </b>", "app")
], Person);
const shahzaib = new Person();
