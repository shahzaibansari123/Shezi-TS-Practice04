// const element= <HTMLInputElement>document.getElementById('num1')!

// element.value

//GENERICS
// use to pass or assigned additional info in typescript

const promise: Promise<string>  =new Promise ((resolve,reject)=>{

setTimout(()=>{
resolve("done")
}, 2000);

})

promise.then(data=>{
data.split(" ");
}

// helping function

function merge(objA : object, objB : object){
    return {...objA, ...objB}
}

const merged= merge({name: " Shahzaib"},{age: 22})
console.log(meege.age);
