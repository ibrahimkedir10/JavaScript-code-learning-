// Creating an empty hashmap
let myMap = {};

// Inserting key-value pairs to the hashmap
myMap["name"] = "John";
myMap["age"] = 25;
myMap["city"] = "Example City";

// Accessing values using keys
console.log("Name: " + myMap["name"]);
console.log("Age: " + myMap["age"]);
console.log("City: " + myMap["city"]);

// Checking if a key exists in the hashmap
if ("gender" in myMap) {
    console.log("Gender: " + myMap["gender"]);
} else {
    console.log("Gender key not found in the hashmap");
}

// Iterating through key-value pairs in the hashmap
for (let key in myMap) {
    console.log(key + ": " + myMap[key]);
}

// Removing a key-value pair from the hashmap
delete myMap["age"];
console.log("After removing age:", myMap);
