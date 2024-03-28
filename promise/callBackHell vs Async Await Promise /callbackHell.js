const items = require('./info');



let Order = (itemOrdered, callProduction)=>{
    setTimeout(() => {
        console.log(`food ${items.food[itemOrdered]}`);
    }, 2000);
    callProduction()
}
// call back hell 
let Production = () =>{
    setTimeout(() => {
        console.log(`size ${items.size[2]}`);

        setTimeout(() => {
            console.log(`drink ${items.drink[1]}`);

            setTimeout(() => {
                console.log(`package ${items.package[1]}`);
            }, 4000);

        }, 1000);

    }, 2000);
}

Order(0,Production);

