const path = require('path');
const rootDir = require('../util/path');

exports.getcontact = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
};

exports.postcontact = (req, res, next) => {
    console.log(req.body);
    res.redirect('/success');
};

exports.successcontacts = (req, res, next) => {
    res.send('<h1>Form successfully filled</h1>');
};
