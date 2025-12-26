


let arr1 = [1,2,3];

let arr2= [...arr1,4,5];

console.log(arr2);


let obj1 ={name:"john",age:22};
let obj2={...obj1,place:"chennai"};

console.log(obj2);
//=====================================================
//rest operator
//=====================================================

let arrA = [1,2,3];
let arrB = [4,5,6];

let merged = [...arrA,...arrB];//spread operator


console.log(merged);

let [p,q,s, ...r]=merged;

console.log(r);






