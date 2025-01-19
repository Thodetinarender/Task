const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const filePath = path.join(__dirname, '../formValues.txt');

// Show message form and previous messages
router.get('/message', (req, res) => {
    const username = req.query.username || 'Anonymous'; // Get username from the query parameter

    // Read previous messages from the file
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err && err.code !== 'ENOENT') {
            console.error('Error reading from file:', err);
            return res.status(500).send('<h1>Internal Server Error</h1>');
        }

        // Prepare the message display
        const messages = data ? data : ''; // If no messages, show empty

        res.setHeader('Content-Type', 'text/html');
        res.send(`
            <h2>Previous Messages:</h2>
            <pre>${messages}</pre>
            <form action="/message" method="POST">
                <label>Message:</label>
                <input type="text" name="message" required>
                <input type="hidden" name="username" value="${username}">
                <button type="submit">Send Message</button>
            </form>
            
            
        `);
    });
});

// Handle message submission
router.post('/message', (req, res) => {
    const username = req.body.username || 'Anonymous'; // Username from the form
    const message = req.body.message;

    if (username && message) {
        const messageData = `${username}: ${message}\n`;

        // Append the new message to the file
        fs.appendFile(filePath, messageData, (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                return res.status(500).send('<h1>Internal Server Error</h1>');
            }

            // Redirect back to the /message route to show the updated list of messages
            res.redirect('/message?username=' + username);
        });
    } else {
        res.status(400).send('<h1>Bad Request</h1>');
    }
});

module.exports = router;
