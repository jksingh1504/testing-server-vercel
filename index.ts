const jsonServer=require("json-server")

const server=jsonServer.create();
const middleware=jsonServer.defaults();
const router=jsonServer.router("db.json")

server.use(middleware);
server.use(router)

server.listen(3000,()=>{
    console.log("json-server running on port 3000")
});