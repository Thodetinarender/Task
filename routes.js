const fs = require("fs");

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url == '/') {
        // Form
        fs.readFile('formValues.txt', (err, data) => {
            const fileContent = err ? "No data available yet." : data.toString();

            res.setHeader('Content-Type', 'text/html');
            res.end(
                `
                <p>${fileContent}</p>
                <form action="/message" method="POST">
                    <label>Name:</label>
                    <input type="text" name="username"></input>
                    <button type="submit">Add</button>
                </form>
                `
            );
        });
    } else if (url == '/message') {
        res.setHeader('content-type', 'text/html');
        let dataChunks = [];
        req.on('data', (chunks) => {
            console.log(chunks);
            dataChunks.push(chunks);
        });

        req.on('end', () => {
            let combinedBuffer = Buffer.concat(dataChunks);
            console.log(combinedBuffer);

            let value = combinedBuffer.toString().split('=');
            console.log(value);

            fs.writeFile('formValues.txt', value[1], (err) => {
                if (err) {
                    console.error(err);
                    res.statusCode = 500; // Internal Server Error
                    res.end("An error occurred");
                    return;
                }
                res.statusCode = 302; // Redirect
                res.setHeader('Location', '/');
                res.end(); // Corrected from `res.end;`
            });
        });
    } else if (url == '/read') {
        // Read from the file
        fs.readFile('formValues.txt', (err, data) => {
            if (err) {
                console.error(err);
                res.statusCode = 500; // Internal Server Error
                res.end("An error occurred while reading the file");
                return;
            }
            console.log(data.toString());
            res.setHeader('Content-Type', 'text/html');
            res.end(`
                <h1>${data.toString()}</h1>
            `);
        });
    }
};

const anotherFunction = () => {
    console.log("This is another functions");
};

// Export the handlers
module.exports = {
    handler: requestHandler,
    testFunction: anotherFunction,
};
