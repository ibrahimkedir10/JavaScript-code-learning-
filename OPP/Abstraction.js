class Animal{
    constructor(type,name,action){
        this._type = type;
        this._name = name;
        this._action = action;

    }
}

class wildAnimal{
    constructor (type,acation,home){
    Animal.call(this._type);
    Animal.call(this._action);
    this._home = home;
    }
}

class Pet{
    
}

const Dog = new Animal('Big Cat', 'Simba','attack');
console.log(Dog);