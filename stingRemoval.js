 function shrinkString(string){

    const removespace = string.replace(/\s/g, '');
    console.log(removespace);


 }

 shrinkString("     Car234!! ")

/*
Format: .replace(/\ s /g, '');
[a-z] : any characters in the range inside bracket
\w : any number letter, number, or underscore 
\W : any letter NOT letter, number, or underscore
\d : any digit
\D : not a Digit
\s : any white space 
\S : any character not a white space 

*/