




// function outer()
// {
//     let count = 0;//outer
//     function inner()
//     {
//         count++;//inner
//         console.log(count);
//     }
//     return inner;
// }

// //closure
// const counter = outer();

// counter();
// counter();
// counter();
// counter();


// const counter2 = outer();

// counter2();
// counter2(); 
// counter2();


//=========================================================

let a =10;//global
function outer()//function scope
{
    let b=20;
    function inner()//function scoppe
    {
        let c=30;
        console.log(a);
        console.log(b);
        console.log(c);
    }
    inner();
}
outer();