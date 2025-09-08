
// Promise is define in javascript evantual, complation and rejection of the task.
// There are 3 states of Promise
  //1]  Pending =    work chalu ahe, pn result milala nahi
  //2]  Fullfill = Work success jhala ahe and result pn milala ahe
  //3]  Rejected = Work fail zala ani error milala 

const prom=new Promise((resolve,reject)=>
{

    let num=100;
    setTimeout(()=>
    {

        if(num>180)
        {
            resolve("Sucess");
        }

        reject("failure");
    },1500)
})

prom.then((v)=>v).then((v)=>
{
    console.log(v);
    
}).then((e)=>e).then((e)=>
{
    console.log(e);
    
}).catch((C)=>{
    console.log(C);
    
})

console.log(prom);