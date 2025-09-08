// Shadowing = Shadowing म्हणजे inner scope मधला variable outer scope मधल्या variable ला hide karto
//let, const, var सगळ्यांमध्ये shadowing होऊ शकते.
//पण illegal shadowing म्हणजे let ने declared केलेल्या variable ला var ने पुन्हा shadow करणं → हे error देतं.

var name="Padmaja";
let num=100;
const numbers=300;


//let num=400
function Demo()
{
   let num=200 //100=>200  //let shadowing
    console.log(num);
    
}

Demo();
num=300;
console.log(num); //100