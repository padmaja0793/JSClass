//(2) Promise with setTimeout(()  => {
        
        let Prom2 = new Promise((resolve, reject)  => {
            setTimeout(() => {
                let data = true;

                    if(data) {
                    resolve("Data recived");
                } else {
                    reject("No data found");
                }
            }, 10000);
        });
            

        Prom2
            .then(msg => console.log(msg))
            .catch(err => console.log(err));
           