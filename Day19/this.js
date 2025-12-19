






function greet(city,age){
    console.log(`hello ${this.name},from ${city}.you are ${age} years old`);
}

const user={
    name:"harish"
};


//call(),apply(),bind()

//cal()
//call()-invokes imidiately
console.log(user,"chennai",25);
greet.call(user,"chennai",25);


//apply()-invokes imidiately
//array
greet.apply(user,["bangalore",30]);

//bind()-returns a function
const boundGreet=greet.bind(user,"mumbai",28);
boundGreet();


