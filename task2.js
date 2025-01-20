
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRouter = require('./routers/admin');
const shopRouter =require('./routers/shop');
const contactRouter =require('./routers/contact');
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));
app.use('/admin', adminRouter);
app.use(shopRouter);
app.use(contactRouter);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views', '404.html'));
})


app.listen(3000, ()=>{
    console.log("Server is running on");
})
 