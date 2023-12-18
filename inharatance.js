// parent class:
function car(brand){
    this.brand = brand;
}

// child class:

function model(year, name,brand)
{
    this.year = year;
    this.name = name;
    car.call(this, brand)
    console.log(this.year,this.name,this.brand);
}

model(2007,"x6", "BMW");