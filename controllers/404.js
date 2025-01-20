const path = require('path');  // Import the path module

exports.error = (req, res, next) => {
    // Correct path to '404.html' in the 'views' folder
    res.status(404).sendFile(path.join(__dirname, '..', 'views', '404.html'));
};
