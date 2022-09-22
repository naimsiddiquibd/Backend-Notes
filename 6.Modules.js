// Local Module
const { fucntionOne, fucntiontwo } = require("./FunctionsToExport");
const localModule = fucntionOne(2,3);
console.log(localModule);

// Core Module
const http = require('http');
const server = http.createServer(function(req, res){

    console.log(`Server is running!`);
  
  });
  
  server.listen(5000);

  // Third Party Module
  // We can use https://underscorejs.org/#pluck