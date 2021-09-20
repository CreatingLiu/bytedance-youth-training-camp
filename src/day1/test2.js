const http = require('http')
const fs = require('fs')

http.createServer((request, response) => {
    const {url, method, headers} = request;

    if(url === "/" && method === "GET") {
        fs.readFile("index.html", (err, data) => {
            if(err) {
                response.writeHead(500, {
                    "Content-Type": "text/plain;charset=utf-8"
                });
                console.log(err);
                response.end("读文件错误");
            }
            else {
                response.writeHead(200, {
                    "Content-Type": "text/html;charset=utf-8"
                });
                response.end(data);
            }
        })
    }

    else if(method === "GET" && headers.accept.indexOf('image/*') !== -1) {
        fs.createReadStream('.' + url).pipe(response);
    }

    else {
        response.writeHead(404, {
            "Content-Type": "text/plain;charset=utf-8"
        });
        response.end("winter老师不见了");
    }
})
.listen(3000);