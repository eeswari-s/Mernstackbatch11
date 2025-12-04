

// product data:

const products = [
    {id:1, name:"Laptop", price: 40000, inStock:true},
    {id:2, name:"Headphone", price: 1500, inStock: false},
    {id:3, name:"keyboad", price: 800, inStock:true},
    {id:4, name:"phone", price: 30000, inStock:true},
];

//function to display

function showProduct(){
    products.forEach(item =>{
        console.log("👉");
          console.log("=====================================");
        console.log("productID: ",item.id);
        console.log("Name: ",item.name);
        console.log("price: ",item.price);


        //if condition

        if(item.inStock)
        {
            console.log("Status: available");
        }
        else{
            console.log("Status:out of stock ")
        }
    });

    console.log("=====================================");
}

showProduct();