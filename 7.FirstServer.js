const http = require('http');
// console.log(http);
const server = http.createServer((req, res) => {
    res.end('hello Node.js');
});
const PORT = 5000;
server.listen(PORT);
console.log(`Server is running at ${PORT}`);