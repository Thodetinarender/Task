const path = require('path');
const rootDir = require('../util/path');

exports.getProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
};

// Fix the typo: 'Porduct' -> 'Product'
exports.postProduct = (req, res, next) => {  // Corrected function name
    console.log(req.body);
    res.redirect('/');
};
