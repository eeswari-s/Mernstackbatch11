

console.log("start");

setTimeout(()=>{
    console.log("step1: login completed");
    
    setTieout(()=>{
        console.log("step2:user data fetched");
        setTimeout(()=>{
            console.log("step3");
            setTimeout(()=>{
                console.log("step4");
            },1000);
        },2000);
    },4000);
},10000);

//start,step1, 2 , 3, 4 , 
//start, step1 , 2, 4, 3,      //start, step4, step3,  step1, step2