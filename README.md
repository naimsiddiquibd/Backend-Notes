----------------------------------
Module-1 JavaScript for Back-end Development
----------------------------------
## Synchronous vs Asynchronous Node.js
1. Node.js Single threated, Non-blocking, Asynchronous
2. Synchronous task: When a synchronous task arrives it will be executing (Event queue)
3. Single threated but Non-blocking because of Asynchronous
4. Asynchronous task: example: Database call, filesystem etc. When an Asynchronous task arrives it will be transferred to the thread pool (Event queue)
5. To check the examples about the Sync and Async visit (https://github.com/naimsiddiquibd/Backend-Notes/blob/main/1.SyncAsync.js)
6. To much nesting call-back is "call-back hell"

## Promises and handling multiple promises
1. 3 kind of Promises: 1. Pending 2. Resolved 3. Rejected
2. To avoid call-back hell
3. const myPromise = new Promise()
4. const myPromise = new Promise((resolve, reject) => {
    <!-- Asynchronous task -->
})
5. Check the examples of the Promise, Promise inside a loop (Async inside Sync), Promise.all: https://github.com/naimsiddiquibd/Backend-Notes/blob/main/2.Promise.js
