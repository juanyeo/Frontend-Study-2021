var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;

    if(_url == '/') {
        title = "Welcome";
    }
    if(_url == 'favicon.ico') {
        return response.writeHead(404);
    }
    response.writeHead(200);
    console.log(__dirname + _url);

    var template = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Start Page</title>
        </head>
        <body>
            <h1>Node JS</h1>
            <h3>${title}</h3>
            <ol>
                <li><a href="/?id=Apple">A</a></li>
                <li><a href="/?id=Orange">O</a></li>
                <li><a href="/?id=Kiwi">K</a></li>
            </ol>
        </body>
    </html>
    `;

    // end 안 데이터가 전달됨  
    response.end(template);
});
app.listen(3000);