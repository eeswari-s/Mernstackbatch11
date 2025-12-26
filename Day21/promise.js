//=======================
//promis
//=======================

var p = new Promise((resolve, reject)=>
{
    let value= 5;

    if(value > 0 )
    {
        resolve("promise success: value positive");
    }
    else{
      reject("promise rejected: value negative");  
    }

 });
 console.log(p);
//=========================
//promise all
//======================

var pro1 = new Promise((resolve,reject)=>{
    if(5=== 5)
    {
        resolve("pro1 success");
    }
    else{
        reject("pro1: rejected");
    }
});

var pro2 = new Promise((resolve,reject)=>{
    if(3 > 1){
        resolve("pro2 success");
    }
    else{
        reject("pro2 rejected");

    }
});
var pro3 = new Promise((resolve,reject)=>{
    if(3 === 3){
        resolve("pro3 success");
    }
    else{
        reject("pro3 rejected");

    }
});

Promise.all([pro1,pro2,pro3]).then((result)=>{
    console.log("all success: ",result);
}).catch((error)=>
{
    console.log("promise all rejected: ",error);
});
//==============================================
//promise chaining
//===============================================


function step1()
{
    return new Promise((resolve, reject)=>{
        if(10 <=5){
            console.log("step 1 completes");
            resolve();
        }else{
            reject("step 1 failed");
        }
    });
}

function step2()
{
    return new Promise((resolve, reject)=>{
        if("harish".length > 0){
            console.log("step 2 completes");
            resolve();
        }else{
            reject("step 2 failed");
        }
    });
}
function step3()
{
    return new Promise((resolve, reject)=>{
        if(1 === 1){
            console.log("step 3 completes");
            resolve();
        }else{
            reject("step 3 failed");
        }
    });
}

step1()
.then(step2)
.then(step3)
.then(()=> console.log("all steps success")).catch((err)=>console.log("error: ",err));

//===========================================================================================

function person(name, age){
    this.name=name;//property
    this.age=age;
}

person.prototype.getInfo=function(){
    console.log("name: ",this.name, "age: ",this.age);
};

function student(name, age, course){
    person.call(this, name, age);
    this.course=course;
}

student.prototype=Object.create(person.prototype);

student.prototype.getCourse = function(){
    console.log("course: ",this.course);
};

let s1 = new student("rubini",24,"mern stack");

s1.getInfo();
s1.getCourse();
//=================================================
//use strict
//==========================
"use strict";
function value()
{
    let a =10;
   b=20
     console.log(a);
     console.log(b);
      
}
value();
