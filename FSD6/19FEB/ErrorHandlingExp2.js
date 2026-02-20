const fs = require("fs");

function doSomething(path) {
    fs.readFile(path, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err.message);
            return;
        }

        console.log("File content:");
        console.log(data);
    });
}

function init() {
    // try with an existing file and a missing file
    doSomething("sample.txt");
    doSomething("missing.txt");
}

init();
