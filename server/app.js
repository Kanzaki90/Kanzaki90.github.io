const express = require("express");
const app = express();
const path = require("path");

try {

    const publicDirectory = path.join(__dirname, "../public");

    app.listen(3000, () => {
        console.log("Host is up on port 3000");
    });
    
} catch (e) {
    console.log(e);
}