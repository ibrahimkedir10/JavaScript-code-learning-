

/*
methode 1: 

function Palindrom2(string){

      const newString = string.split('').reverse().join('');
   
    console.log(newString);
    if(newString === string){
        
        console.log("true");
      
    }
    else{
        console.log("false");
    }
}

Palindrom2("racecar")

*/

// methode 2

function Palindrom2(string){
// create stack 
let palindromStack = [];
let reversedWord = "";

//push word into stack -> first in last out 
for(let i = 0 ; i < string.length ; i++){
    palindromStack.push(string[i]);
}

// pop word out so now they are reversed 
for(let i = 0; i < string.length ; i++){
    reversedWord += palindromStack.pop();
}

if(string === reversedWord){
    console.log("true");
}
else{
    console.log("fasle");
}



}

Palindrom2("racecar")
