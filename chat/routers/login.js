const express = require('express');
const router = express.Router();

// Display login form
router.get('/login', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(`
        <form id="login-form">
            <label>Name:</label>
            <input type="text" id="username" required>
            <button type="submit">Login</button>
        </form>
        <script>
           document.getElementById('login-form').addEventListener('submit', function(e) {
           e.preventDefault();
           const username = document.getElementById('username').value;
           if (username) {
            localStorage.setItem('username', username); // Save username to LocalStorage
            window.location.href = '/message?username=' + username; // Redirect to message page with username
        }
    });
</script>

    `);
});

module.exports = router;
