// Small script used to write the package.json file out from the package.js
// file.

var fs = require("fs-extra");
var packagejson = require("./src/package.js");

console.log("Writing the package.json file out from package.js...");
fs.writeJSONFile("package.json", packagejson, function(err){
    if (err) {
        console.log("Error writing package.json");
        console.log(err);
        console.log("");
    }
    else {
        console.log("package.json written successfully.");
        console.log("");
    }
});
