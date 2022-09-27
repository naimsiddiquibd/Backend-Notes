----------------------------------
Module-1 JavaScript for Back-end Development
----------------------------------
### 1. Synchronous vs Asynchronous Node.js
1. Node.js Single threated, Non-blocking, Asynchronous
2. Synchronous task: When a synchronous task arrives it will be executing (Event queue)
3. Single threated but Non-blocking because of Asynchronous
4. Asynchronous task: example: Database call, filesystem etc. When an Asynchronous task arrives it will be transferred to the thread pool (Event queue)
5. To check the examples about the Sync and Async visit (https://github.com/naimsiddiquibd/Backend-Notes/blob/main/1.SyncAsync.js)
6. To much nesting call-back is "call-back hell"

### 2. Promises and handling multiple promises
1. 3 kind of Promises: 1. Pending 2. Resolved 3. Rejected
2. To avoid call-back hell
3. const myPromise = new Promise();
4. const myPromise = new Promise((resolve, reject) => {Asynchronous task});
5. Check the examples of the Promise, Promise inside a loop (Async inside Sync), Promise.all: https://github.com/naimsiddiquibd/Backend-Notes/blob/main/2.Promise.js

### 3. Async await
1. Await: inside an Async function it works. It will wait until the resolve or reject arrive.
2. Use "async" keyword before to make a function Async.
3. .then (dot then) not needed here.
4. Inside the function the promise can be called using a variable: const res = await myPromise;
5. To check the example: https://github.com/naimsiddiquibd/Backend-Notes/blob/main/3.AsyncAwait.js

### 4. Errors and error handling
1. To avoid server-down because of an error: try catch
2. To handle error properly: global function: errorHandler(error)
3. Error destructuring: const {name, message, stack} = error;
4. Error can be stored by "logger.error"
5. To check the example: https://github.com/naimsiddiquibd/Backend-Notes/blob/main/4.Errors.js

### 5. Import export
1. Every JavaScript file has a object named "Module"
2. "Module" has am "Exports" object
3. To export a function: module.exports = functionName; (Default Export)
4. To access it from an another file: const functionName = require(./functionName.js);
5. To export multiple functions: (Name Export)
module.exports.fucntionOne = functionOne;<br>
module.exports.fucntiontwo = functionTwo;
6. To access them from an another file:<br>
const { fucntionOne, fucntiontwo } = require(./functionName.js);
7. Alternative way:<br>
module.exports = {<br>
    functionOne,<br>
    functionTwo,<br>
}
8. Example of Export: https://github.com/naimsiddiquibd/Backend-Notes/blob/main/FunctionsToExport.js
9. Example of Import: https://github.com/naimsiddiquibd/Backend-Notes/blob/main/5.ImportExport.js

----------------------------------
Module-2 Introduction To NodeJS & Package Manager
----------------------------------
### 1. Introduction to node.js and npm
1. 1995-2009 only can handle front-end logic
2. JavaScript Could not do query in database, handle server side request and response, read/write fine on server, server side operation

### 2. How node works behind the scene
1. Chrome has V8 Engine, V8 has DOM access
2. Not CPU Intensive work
3. I/O Intensive work

### 3. Installation of node.js and running javascript outside of the browser
1. Install Nde.js
2. To check the global method in Chrome: Console: window (press enter)

### 4. What is global object and modules
1. Global variable: "var" acts like a global variable, it could be access by "window.variableName" inside Chrome console
2. Import, Export

### 5. Different types of modules
1. 3 Kind of Modules: 1. Local Modules 2. Core Modules, 4. Third Party Modules (https://www.tutorialsteacher.com/nodejs/nodejs-modules)
2. Local Modules: Already seen in the 1.5
3. Core Modules: Required by Node. We got then after: "npm init -y"
4. Third Party Module: Developed by others, need to install it first.
5. Example: https://github.com/naimsiddiquibd/Backend-Notes/blob/main/6.Modules.js

### 6. Create your first node server
1. Use a core module: const http = require('http');
2. Inside a variable (server), call "http.createServer" method with "req" and "res" parameter and then res.end('hello Node.js'); [This would be shown in the Browser]
3. Define a server port (5000) inside PORT variable
4. Now listen from the variable (server) from the PORT
5. console.log(`Server is running at ${PORT}`); [This would be shown in the Terminal]
6. Example: https://github.com/naimsiddiquibd/Backend-Notes/blob/main/7.FirstServer.js

### 7. Request and Response Model
1. Request > (Device to server)
2. Response > (Server to device)
3. Two type of Response: 1. Status code, 2. Data
4. Two type of Data: 1. Head, 2. Body
5. Status code: 200 success, 500 internal server error, 400 bad request, 401 unauthorized, 404 not found
6. npm i -D nodemon (To keep the server running)
7. Inside server: clg req.url and change the url's tail from the browser and check terminal what's happened there
8. Make a condition: if the url's tail matches with the condition then, res.writeHead(); res.write(); res.end();
9. Can possible to send data as a html ({'Content-Type':'text/html})
10. Can possible to send data as a JSON ({'Content-Type':'application/json''})
11. Example: https://github.com/naimsiddiquibd/Backend-Notes/blob/main/8.ReqResModel.js

### 8. Exploring URL Module
1. Example url: http://localhost:5000/contact?name=Naim&country=Bangladesh
2. Perse from the url and then Query
3. Use another core module: const url = require('url');
4. Put the example url inside a variable, then parse it: url.parse(exampleURL, true); inside a variable
5. To see what's happening: console.log(parsed_url);
6. There we can see a quesry object
7. Get the query object in this way: const queryObject = parsed_url.query;
8. Example: https://github.com/naimsiddiquibd/Backend-Notes/blob/main/9.urlModule.js

### 9. Exploring File System Module
1. Visit: https://www.tutorialsteacher.com/nodejs/nodejs-file-system
2. Two types: Asynchronous & Synchronous
3. Important actions: fs.readFile, fs.writeFile, fs.rename, fs.exists, fs.appendFile
4. Asynchronous way: fs.readFile(fileName [,options], callback);
5. Synchronous way: fs.readFileSync(fileName [,options]);
6. Example: https://github.com/naimsiddiquibd/Backend-Notes/blob/main/10.FileSystem.js

### 10. Events, stream, and Buffer
1.