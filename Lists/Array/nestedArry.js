var nested = [["first ", 1],["second", 2],["third", 33]];

console.log(nested);


// finding a specific value inside a nested array using index 
const datafind = nested[1][0];
console.log(datafind);

var addToEnd = nested.push(["test"]);
console.log(addToEnd);

var addToStart = nested.unshift(["new first element "])

var removelast = nested.pop();
console.log(removelast);

var removefirst = nested.shift()
console.log(removefirst)
