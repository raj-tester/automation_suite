const newPromise = new Promise((resolve, reject) =>{

    setTimeout(()=>{
        //console.log("raj")
        resolve('Yes')
        reject ("No")
        
    }, 2000)
}) ;

newPromise
.then(()=>
{
    //console.log(resolveResp)
    return "yes raj"
})
.then((finalanswer)=>{
    console.log(finalanswer)
})
.catch((failedErr)=>
    console.log(failedErr)
)


