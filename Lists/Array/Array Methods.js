const array1= [1,5,3,8,7,2,9,4,10,6];

//push 
array1.push(11);
console.log(array1);

//pop
array1.pop();
console.log(array1);

//unshift
array1.unshift(0);
console.log(array1);

//shift
array1.shift();
console.log(array1);

//reverse 
array1.reverse();
console.log(array1);

//sort 
array1.sort();
console.log(array1);

array1.forEach(element => {
    console.log(element + 2);
});

const sqrArray = array1.map((element)=>element *2);
console.log(sqrArray);

