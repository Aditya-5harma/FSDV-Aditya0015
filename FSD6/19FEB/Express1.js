const express = require("express");
const app = express();
const port = 8080;

// define route
app.get("/", (req, res) => {
    res.send("Hello World");
});

// start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
