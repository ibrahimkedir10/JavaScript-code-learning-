/*CALL / APPLY/ BIND
* call: Calls a function with a specified this value and arguments provided individually.
* apply: Calls a function with a specified this value and arguments provided as an array.
* bind: Creates a new function with a specified this value and initial arguments, without invoking it immediately. */

//part 1
/*

  function Person(name, age) {
    this.name = name;
    this.age = age;
    console.log(this.name + " " + this.age);
  }
  
  // Creating an instance using the 'new' keyword
  const person1 = new Person("max", 23);
  
  // Creating an object literal
  const person2 = {};
  
  // Using call with the 'new' keyword for the first instance
  Person.call(person1, "John", 30);
  
  // Using apply with the object literal for the second instance
  Person.apply(person2, ["Jack", 25]);
  
  // Using bind for a new instance
  const person3 = {};
  const boundFunction = Person.bind(person3, "Alice", 28);
  boundFunction(); // Outputs: Alice 28
  */



   function School (name, numberOfStudents){
    this.name = name;
    this.numberOfStudents = numberOfStudents;
    console.log(name +" number of students: "+ numberOfStudents+"number of profesors: "+ this.numberofProfesors );
  }

  var numberofProfesors ={numberofProfesors:100};

  School.call(numberofProfesors, "la salle unversity",2000);
