//-------------------------------------------------------
//create
//------------------------------------------------------

const products = [
    {id:1,name:"laptop",price:55000,category:"Electronics", description:"i5 Procrssor,16gb Ram", rating: 4.5},
    {id:2,name:"Phone",price:25000,category:"Electronics", description:"1 TB: 17.42 cm (6.9″) Display with Promotion, ", rating: 4.2},
    {id:3,name:"Headphones",price:2000,category:"Accessories", description:"Active Noise Cancelling in Ear Headphones", rating: 4.0},
    {id:4,name:"Keyboard",price:1000,category:"Accessories", description:"Cool RGB Backlight Waterproof Keyboard", rating: 3.8},
    {id:5,name:"smartwatch",price:3500,category:"wearable", description:"1.39 Display Metal Build", rating: 4.0},
    {id:6,name:"Led Tv",price:40000,category:"Electronics", description:"VW 80 cm (32 inches) ", rating: 4.5},
    {id:7,name:"shoes",price:1500,category:"Fashion", description:"Lightweight Comfortable Slip", rating: 4.4},
    {id:8,name:"tablet",price:15000,category:"Electronics", description:"i5 Procrssor,16gb Ram", rating: 3.7},
    {id:9,name:"power bank",price:1200,category:"Accessories", description:"i5 Procrssor,16gb Ram", rating: 3.5},
    {id:10,name:"dress",price:3000,category:"Fashion", description:"Fit & Flare Wrap Dress", rating: 4.5}

];

//==========================================
//apply offers
//==========================================
function getDiscountedProducts()
{
    return products.map(item =>{
        return{
            ...item,
            oldPrice: item.price,
            discountPrice: Math.round(item.price * 0.9)//10% off
        };
    });
}

//===========================================
//show product details page (with discount)
//=========================================

function showProductsDetails()
{
    const updated = getDiscountedProducts();
    console.log("show product details page (with discount)");

    updated.forEach((p)=>{
        console.log(`
            
            ID: ${p.id}
            Name: ${p.name}
            Category: ${p.category}
            Old price:RS.${p.oldPrice}
            Discount proice:RS.${p.discountPrice}
            Description:${p.description}
            Ratings:${p.rating}
            ------------------------------------`);
    });
}

showProductsDetails();


//============================================
//category filter function
//===========================================
 
function filterByCategory(categoryName)
{
    console.log(`CATEGORY FILTER: ${categoryName}\n`);

    const filtered = getDiscountedProducts().filter(p => 
        p.category.toLowerCase() === categoryName.toLowerCase()
    );

    if(filtered === 0)
    {
        console.log("❌ No prroducts found in this category");
        return;
    }

    filtered.forEach(p=>
    {
        console.log(`${p.name} | Rs.${p.discountPrice} | ⭐ ${p.rating}`);
    } );
}

filterByCategory("Fashion");
filterByCategory(" 0");

//====================================================
//cart
//====================================================
let cart=[];

 function addToCart(id)
 {
    const  updatedProducts = getDiscountedProducts();
    let product = updatedProducts.find(p=>p.id === id)

    if(!product)
    {
        console.log("Product not found");
    }

    let existing = cart.find(item => item.id === id);

    if(existing)
    {
        existing.qty++;
        console.log(`${existing.name} QTy: ${existing.qty}`);
    }
    else{
        cart.push({
            ...product, qty: 1
        });
        console.log(`added toi cart ${product.name}`);
    }
 }

 function removeFromCart(id)
 {
    let index = cart.findIndex(item =>item.id === id)

    if(index !== -1){
        console.log(`removed ${cart[index].name}`);
    cart.splice(index,1);
    }
    else{
        console.log("item not found in cart");
    }

 }


 function showCart()
 {
    if(cart.length === 0)
    {
        console.log("cart is empty");
        return;
    }

    console.log("tour cart items");

    let total =0;
    cart.forEach(item =>{
        console.log(`-${item.name} 🎁 Rs.${item.discountPrice}| qty: ${item.qty}`);
        total += item.discountPrice * item.qty;
    });
    console.log(`Total amount: ${total}`);
 }

 addToCart(5);
 addToCart(6);
 addToCart(6);
 addToCart(7);


 removeFromCart(7);
 

 showCart();

  //===================================
  //search products
  //==================================
  function searchproduct(keyword)
  {
    console.log(`\n 🔍 search result for : ${keyword}`);

    let result = products.filter(p =>
        p.name.toLowerCase().includes(keyword.toLowerCase())

    );

    if(result.length === 0)
    {
        console.log("product not found");
        return;
    }

    result.forEach(p=>{
        console.log(`-${p.name} | Rs.${p.price}`);
    });

  }

  searchproduct("tab");