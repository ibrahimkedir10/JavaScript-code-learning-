const array1 = [1,2,3,4,5,6,7];
const array2 = ["one", "two", "three"];
const array3 = "hello world how are you";


for(let i = 0 ; i < array2.length ; i++){
    const output = array2[i];
    console.log(output);
}

for(let i in array3){
    const output2 = array3[i];
    console.log(output2);
}