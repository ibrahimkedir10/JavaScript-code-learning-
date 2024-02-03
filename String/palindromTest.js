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