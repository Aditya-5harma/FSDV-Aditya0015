function doSomething(value) {
    if (value === undefined || value === null) {
        throw new Error("Value is required");
    }

    if (typeof value !== "number") {
        throw new TypeError("Value must be a number");
    }

    if (value < 0) {
        throw new RangeError("Value cannot be negative");
    }

    // simulate processing
    return Math.sqrt(value);
}

function init() {
    const testValues = [25, -4, "hello", null];

    testValues.forEach(val => {
        try {
            const result = doSomething(val);
            console.log(`Result for ${val}:`, result);
        } catch (error) {
            console.error(`Error for ${val}: ${error.message}`);
        } finally {
            console.log("Attempt completed\n");
        }
    });
}

// start program
init();
