const express = require("express");
const app = express();
const port = 8080;

// middleware to parse JSON body (for POST)
app.use(express.json());

// GET request → homepage
app.get("/", (req, res) => {
    res.send("Welcome to the homepage");
});

// POST request → homepage
app.post("/", (req, res) => {
    res.send("POST request received on homepage");
});

// GET request → about page
app.get("/about", (req, res) => {
    res.send("This is the About page");
});

// catch all other routes
app.use((req, res) => {
    res.status(404).send("Route not found");
});

// start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
