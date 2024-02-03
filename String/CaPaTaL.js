// function that changes ever other letter into a capital 

function capital(string){

    let newString = "";
    const StringArry = string.split('');

    for(let i = 0; i < string.length ; i++){
        if(i % 2 === 0){
            newString += StringArry[i].toUpperCase();
        }
        else {
            newString += StringArry[i];
        }

    }
    console.log(newString);

}
capital("hello")