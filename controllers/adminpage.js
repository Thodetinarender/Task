const path = require('path');

const rootDir = require('../util/path');

exports.getproduct=(req, res, next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
}

exports.postProduct =(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
}