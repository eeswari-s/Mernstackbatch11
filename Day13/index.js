






let nums = [10, 20, 30];
nums.forEach(n =>console.log(n));


const students = [
    {
        name:"harish",
         mark: 94
    },
    {
        name:"robin",
        mark:80
    },
    {
        name:"guru",
        mark:20
    }
];

  students.forEach(s =>{
    if(s.mark >= 50)
    {
        console.log(s.name, "Pass");
    }
    else{
        console.log(s.name, "fail");
    }
  });




