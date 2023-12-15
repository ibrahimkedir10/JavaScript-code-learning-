
function brokenString(string){
// convert to lowercase
 const lowercase = string.toLowerCase();

 // reverse order 
 const reverse = lowercase.split("").reverse().join("");

 // remove space 
 
 //1. count the spaces

    let spacecounter = 0;
  for (let i = 0; i < reverse.length; i++) {
    if (reverse.charAt(i) == " ") {
      spacecounter++;
    }
  }
 const space = reverse.substring(spacecounter);


 // or use   const spaceRemoved = reverse.replace(/\s/g, '');

 return reverse;
}

console.log(brokenString("  tpircSavaJ"));

