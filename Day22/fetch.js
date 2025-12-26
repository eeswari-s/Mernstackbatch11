fetch('https://dummyjson.com/recipes')
.then(res => res.json())
.then(data =>console.log("recipes: ",data))
.catch(err=>console.log("errorr: ",err));

//post

fetch("https://dummyjson.com/recipes/add",{
    method:"POST",
    headers:{
        "content-Type":"application/json"
    },
    body:JSON.stringify({
        name:"chicken Biriyani",
        ingredients:["chicken","Rice","Masala"],
        instructions:"Cook and serve",
    })
})
.then(res => res.json())
.then(data => console.log("post success: ",data))
.catch(err => console.log(err));
