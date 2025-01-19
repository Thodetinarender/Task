const express = require('express');
const bodyParser = require('body-parser');

// Import routes
const loginRoutes = require('./routers/login');
const messageRoutes = require('./routers/message');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use(loginRoutes);
app.use(messageRoutes);

// 404 Page
app.use((req, res) => {
    res.status(404).send('<h1>Page not found</h1>');
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
