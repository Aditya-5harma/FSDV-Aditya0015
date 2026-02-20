const fs = require("fs");

function doSomething(path, fallbackData) {
    fs.readFile(path, "utf8", (err, data) => {
        if (err) {
            console.error("Could not read file. Using fallback.");
            console.error(err.message);

            console.log("Fallback data:");
            console.log(fallbackData);
            return;
        }

        console.log("File data:");
        console.log(data);
    });
}

function init() {
    const defaultText = "Default configuration loaded.";

    doSomething("config.txt", defaultText);
}

init();
