
let count =0;//starting value

const timer = setInterval(()=>{
    count++;
    console.log("count: ",count);

    if(count === 5 )//code ended
    {
        clearInterval(timer);
        console.log("timer stopped");
    }
},3000);

let countA=0;

const intervalId = setInterval(()=>{
    console.log("this is prints every 2 seconds");
     count++;

     if(countA ===3)
        clearInterval(intervalId);
    console.log("interval stopped");
},5000);


