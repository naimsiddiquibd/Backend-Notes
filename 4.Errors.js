/** 
async function getData(){
    undefined.find();
    // I will give and error!
}
getData();
console.log("check it then"); // This one won't be displayed because of the error above
**/
// try-catch:
async function getData(){
    try {
        // undefined.find();
        const emailError = new Error("Email already exist!");
        throw emailError;
    } catch (error) {
        // console.log(error);
        errorHandler(error);
    }
};
getData();

function errorHandler(error){
    // console.log(error);
    // To check the specific property
    const {name, message, stack} = error;
    // console.log("Name:",name,"Message:",message);

    // logger.error({
    //     name,
    //     message,
    //     stack,
    // });
    // console.log("Internal Server Error!");
}

console.log("This one would be showed by avoiding the error");