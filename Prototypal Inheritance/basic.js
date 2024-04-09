
let object1 = {
    size: 'small',
    color: 'black',
    shap: 'square'
}

let object2 ={
    size: 'large',
    color: 'yellow',
    shape: 'circle'
}

let sun = Object.create(object2);

console.log(sun.size);