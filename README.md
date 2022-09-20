----------------------------------
Module-1 JavaScript for Back-end Development
----------------------------------
### Synchronous vs Asynchronous Node.js
1. Node.js Single threated, Non-blocking, Asynchronous
2. Synchronous task: When a synchronous task arrives it will be executing (Event queue)
3. Single threated but Non-blocking because of Asynchronous
4. Asynchronous task: example: Database call, filesystem etc. When an Asynchronous task arrives it will be transferred to the thread pool (Event queue)
5. To check the examples about the Sync and Async visit (https://github.com/naimsiddiquibd/Backend-Notes/blob/main/1.SyncAsync.js)
6. To much nesting call-back is "call-back hell"

### Promises and handling multiple promises
1. 3 kind of Promises: 1. Pending 2. Resolved 3. Rejected
2. To avoid call-back hell
3. const myPromise = new Promise();
4. const myPromise = new Promise((resolve, reject) => {Asynchronous task});
5. Check the examples of the Promise, Promise inside a loop (Async inside Sync), Promise.all: https://github.com/naimsiddiquibd/Backend-Notes/blob/main/2.Promise.js

### Async await
1. Await: inside an Async function it works. It will wait until the resolve or reject arrive.
2. Use "async" keyword before to make a function Async.
3. .then (dot then) not needed here.
4. Inside the function the promise can be called using a variable: const res = await myPromise;
5. To check the example: https://github.com/naimsiddiquibd/Backend-Notes/blob/main/3.AsyncAwait.js

### Errors and error handling
1. To avoid server-down because of an error: try catch
2. To handle error properly: global function: errorHandler(error)
3. Error destructuring: const {name, message, stack} = error;
4. Error can be stored by "logger.error"