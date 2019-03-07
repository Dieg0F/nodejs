const userFile = '/userNumbers.txt';
const sortedFile = '/sortedNumbers.txt';

var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
    switch (request.url) {
        case '/':
            openHomePage(response);
            break;
        case '/sort.js':
            openJsFile(response);
            break;
        case '/style.css':
            openStyleFile(response);
            break;
        case '/userNumbers.js':
            openUserNumbers(response);
            break;
        case '/sortedNumbers.js':
            openSortedNumbers(response);
            break;
        default:
            break;
    }
});
server.listen(3000, function () {
    console.log('Executando Servidor HTTP');
});

function openJsFile(response) {
    fs.readFile('sort.js', function (err, js) {
        response.writeHeader(200, { 'Content-Type': 'text/javascript; charset=UTF-8;' });
        response.write(js);
        response.end();
    });
}

function openStyleFile(response) {
    fs.readFile('style.css', function (err, css) {
        response.writeHeader(200);
        response.write(css);
        response.end();
    });
}

function openHomePage(response) {
    fs.readFile('index.html', function (err, html) {
        response.writeHeader(200, { 'Content-Type': 'text/html; charset=UTF-8;' });
        response.write(html);
        response.end();
    });
}

function openSortedNumbers(response) {
    fs.readFile(sortedFile, function (err, html) {
        response.writeHeader(200, { 'Content-Type': 'text/html; charset=UTF-8;' });
        response.write(html);
        response.end();
    });
}

function openUserNumbers(response) {
    fs.readFile(userFile, function (err, html) {
        response.writeHeader(200, { 'Content-Type': 'text/html; charset=UTF-8;' });
        response.write(html);
        response.end();
    });
}
