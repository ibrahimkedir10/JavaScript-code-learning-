class Parent{
    // class attributes:
    constructor(parentname,age){
        this._parentname = parentname;
        this._age = age;
    
    }

    // methods 

    callName(parentname){
        console.log(parentname);
    }
    AgeLeft(age){
        const avgDeathAge = 100;
        console.log(avgDeathAge - age);
    }

}

class Child extends Parent {
    constructor(parentname, childname){
        super(parentname);
        this.childname = childname;
    }

    callChild(childname,parentname){
        console.log("child:" + this.childname  + " parent: " + this._parentname)
    }

}


// create object 

const child1 = new Child("Mo", "Ib");
const parent1= new Parent("Mo",45);

child1.callChild();
