const http = require("http")
const port = 2002

const server = http.createServer((req,res)=>{
   res.write("hello this is my first serverd")
   console.log("server created");
   res.end(); 
});

server.listen(port,()=>{
    console.log(`listening on port${port}`)
});



