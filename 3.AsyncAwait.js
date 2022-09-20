const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Successful!");
    }, 5000)
});

async function getData(){
    const res = await myPromise;
    console.log(res);
};

getData();


// Normal Fetch
fetch("")
    .then(res => res.json())
    .then(data => console.log(data));

// Node Fetch
async function setUser () {
    const res = await fetch("");
    const data  = await res.json;

    const res2 = await fetch("");
    const data2  = await res.json;
}
