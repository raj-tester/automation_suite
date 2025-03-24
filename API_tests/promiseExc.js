console.log("Program Started");

const myPromise = new Promise((resolve, reject)=>
{
    setTimeout(()=>{
        resolve("Program is complete")
    }, 3000)

});

myPromise.then((value)=>
{
    console.log(value)
})

console.log(myPromise);
console.log("Program in Progress...");