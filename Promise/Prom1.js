
//(1)Creating a Promise                                                         

let Prom1 = new Promise((resolve, reject) => {
    let success = true;  // Try changing to false

    if (success) {
        resolve("Task completed successfully");
    }
    else {
        reject("Task failed");
    }
});





//using Promise
Prom
    .then(result => console.log(result))   //If Success
    .catch(error => console.log(error))   //If Failed
    .finally(() => console.log("Promise Finished"));

    

                