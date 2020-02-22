const express = require("express");
const app = express();
const path = require("path");

const route = require("./routes/route");

try {

    const publicDirectory = path.join(__dirname, "../public");

    app.use(express.static(publicDirectory));
    app.use("/" ,route);

    app.listen(3000, () => {
        console.log("Host is up on port 3000");
    });

} catch (e) {
    console.log(e);
}