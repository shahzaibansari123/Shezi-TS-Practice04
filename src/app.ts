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


