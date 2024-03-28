const items = require('./info');

const storeOpened = true ;

// write promise 

const Available = ()=>{
    return new Promise((resolve, reject) =>{
        if(storeOpened){
            resolve("Opended to take order");
        }
        else{
            reject("closed no orders");
        }
    });

    
}

const production = async() =>{
    try{
        await Available(2000)
            console.log(`food ${items.food[1]}`);

        await Available(2000)
            console.log(`size ${items.size[1]}`);

      
    }
    catch(error){
        console.error();
    }
    finally{
        console.log('enjoy');
    }
}


production();