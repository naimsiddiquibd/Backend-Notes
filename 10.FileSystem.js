const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        // Asynchronous way - Read File
        // fs.readFile('data.txt', (err, data) => {
        //     if (err) {
        //         res.write('Failed to read!');
        //         res.end();
        //     }else{
        //         res.write(data);
        //         res.end();
        //     }
        // })

        // Synchronous way - Write File
        // const data = fs.readFileSync('data.txt')
        // res.write(data);
        // res.end();

        // Asynchronous way - Write File
        fs.writeFile('data.txt', 'Hello Node.js!',(err) => {
            if (err) {
                res.write('Data failed to write');
                res.end();
            }else{
                res.write('Data written successfully!');
                res.end();
            }
        })
    }
})

const PORT = 5000;
server.listen(PORT);
console.log(`running from ${PORT}`);