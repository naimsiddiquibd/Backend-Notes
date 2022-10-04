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
1. Require events (it's a node module, nothing needs to install)
2. Get eventEmitter from the events with "new" and store it inside a variable
3. Create a event handler
4. Assign the handler in an event
5. Fire the event
6. Event Example: https://github.com/naimsiddiquibd/Backend-Notes/blob/main/11.Event.js
7. stream and Buffer:
8. (Rest seems very complicated, need to have a look later)

----------------------------------
Module-3 Explore Express While Building Rest API's
----------------------------------
### 1. What is Express and why we use it?
1. IMB, Ebay, Ubar using Express
2. It's a Node.js's Framework
3. Fully under control, not like Laravel or Django

### 2. Software architectural pattern - MVC
1. We have to follow: Software Architectural Pattern
2. MVC: Model View Controller

### 3. Software architectural pattern - MVC
1. We are going to work on it (download the initial brunch): https://github.com/Abdify/express-mvc-acc
2. 4 parts of the project:</br>
Middleware</br>
Functions (Email sending, Database call)</br>
Routs</br>
API connection (app.listen)</br>
3. Cut the functions and put them inside "utils" folder separately (dbConnect.js & email.js) then export them
4. Cus the routs and put them inside "routes" folder separately (users.route.js & tools.route.js)
5. Inside tools.route.js: require express, call express.router and put it inside a variable
6. 

### 4. Explore and refactor Controllers

### 6. Middleware!

----------------------------------
Module-4 Assignment
----------------------------------
(Check ph website acc course)

----------------------------------
Module-5 Deep Dive Into MongoDB Database
----------------------------------
### 1. Introduction to MongoDB
1. NoSQL: Object based, Document oriented, Bjson format, Not table lite SQL

### 1. Installation and setup
1. Download and open
2. Click "Complete", Checkbox "Install mongoDB Compass" and install it
3. Download mongoDB Shell
4. To check mongoDV Shell using CMD: Command: mongosh

### 2. Inserting data
1. To check the existing databases from Mongosh: show dbs
2. Create a database named "tools": use tools
3. To create a collection named "users" and insert an object: db.users.insertOne({ name: "Naim", age: 23 })
4. Clear terminal: cls
5. To check the users: db.users.find()
6. Now check by "show dbs" and check the newly created database called "tools"
7. To insert multiple: db.users.insertMany([array])

### 4. Querying data
1. Get to a database called "tools": use tools
2. Check the collection called "users": show collections
3. To check the documents inside the collection: db.users.find()
4. To check how many users there: db.users.find().count()
5. To check limited data: db.users.find().limit(2)
6. To skip the first two: db.users.find().skip(2).limit(2)
7. To short high to low: db.users.find().sort({ age: -1 })
8. To short low to high: db.users.find().sort({ age: 1 })
9. If the same number existed the sort them with name: db.users.find().sort({ age: 1, name: 1 })
10. To get all the names only: db.users.find().projection({name: 1})
11. To get all the names only without IDs: db.users.find().projection({name: 1, _id: 0})
12. Find specific by name: db.users.find({name: "Naim"})
13. Find by specific element of an array: db.users.find({skills: "JavaScript"})
14. Find by an array: db.users.find({skills: ['C++', 'JavaScript']})
15. 

### 5. Operators

----------------------------------
Module-6 Introduction to Mongoose & implement it to a  real project
----------------------------------
### 1. Why do we use mongoose
1. We will get a lot of in-build functionality
2. Check https://mongoosejs.com/

### 2. Connect your MongoDB with Mongoose
1. Project: Inventory Management System
2. Install important things: npm i express cors dotenv mongodb colors
3. Install Mongoose: npm install mongoose --save
4. Create "app.js" and setup a basic structure: 
5. Create "Server.js" and setup basic structure:
6. To create a devDependencies: npm i -D nodemon
7. package.json: "scripts": { "start": "node server", "dev": "nodemon server"}