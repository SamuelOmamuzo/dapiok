const fs = require("fs")

if (!fs.existsSync("./sam")){
    fs.mkdir("./sam",(error)=>{
        if(error){
            console.log("there was an error",error)
        }else{
            console.log("it ran successfuly")
        }
    })
}else{
    const old = "./sam"
    const now=(a)=>{
        return a+"0"
    }
    console.log(now(old))

    fs.rename(old,now(old),(error)=>{
        if (error){
            console.log("error occured",error);
        }else{
            console.log("completed")
        }
    })
}