const http = require("http");
const port = 5000;
const fs = require("fs");
const path = require("path");

http.createServer(function (request, response) {
    const filePath = path.join(__dirname, "index.html");
    fs.readFile(filePath, (err, data) => {
        if (err) {
            response.writeHead(500, { "Content-Type": "text/plain" });
            response.write("Error loading index.html");
            response.end();
        } else {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(data);
            response.end();
        }
    });
}).listen(port);
