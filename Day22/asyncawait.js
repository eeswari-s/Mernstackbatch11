function getUserData()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({name:"john",age:23,course:"mernstack"});
        },3000)
    });
}


async function displayUser(){
    console.log("fetching user data ");

    const user= await getUserData();

    console.log("user data ");
    console.log(user);
}

displayUser();