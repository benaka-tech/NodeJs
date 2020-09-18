var fs = require('fs');

  
  var contents=fs.readFileSync("new.txt");
  console.log(contents.toString());
  console.log("do the remaining work");
 
