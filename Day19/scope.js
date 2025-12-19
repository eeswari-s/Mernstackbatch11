




{
    var c=30;//global scope
    console.log(c);
}
console.log(c);



let a=10;
{
console.log(a);
}
console.log(a);



{
    let b=20;//block scope
    console.log(b);
}




{
    const d=40;//block scope
    console.log(d);
}



//function scope
function test(){
    var e=50;//function scope
    console.log(e);
}
test();
console.log(e); 


