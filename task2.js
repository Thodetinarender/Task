const http=require("http")
const routes = require("./routes");

routes.testFunction();
const server=http.createServer((routes));

server.listen(3000, ()=>{
    console.log("Server is running on");
})
 