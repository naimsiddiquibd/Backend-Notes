// 3 kind of Promises: 1. Pending 2. Resolved 3. Rejected
// To avoid call-back hell
const myPromise = new Promise((resolve, reject) => {
    const user = 2;
    if(!user){
        reject("Something went wrong!");
    }else{
        setTimeout(() => {
            resolve("We got the data!");
        }, 5000);
    }
});

// A loop is a Sync task & a promise is an Async task. In the case of and Async task inside a loop, the datawould not be founed. That's why we have to push the entire Promise and then we need to use "Promise.all" function.

const userIds = [1, 2, 3, 4, 5];
let userData = [];
for(let i = 0; i < userIds.length; i++){
    const userId = userIds[i];
    userData.push(myPromise); // Pending state
}
console.log(userData);
Promise.all(userData).then(res => {
    console.log(res);
})

// Promise consuming
myPromise
    .then(res => console.log("Found in then:",res))
    .catch(err => console.log("Fount in catch:",err));