var jsonServer = require("json-server");
var server = jsonServer.create();
var middleware = jsonServer.defaults();
var router = jsonServer.router("db.json");
server.use(middleware);
server.use(router);
server.listen(3000, function () {
    console.log("json-server running on port 3000");
});
