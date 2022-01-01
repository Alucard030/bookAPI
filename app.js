const express=require('express');
const app=express();
const mongoose=require('mongoose');
const BookRoutes=require('./Routes/routes')

//db Connetion
const mongoURL="mongodb://localhost:27017/bookApp";
mongoose.connect(mongoURL,{ useUnifiedTopology: true , useNewUrlParser: true },(err)=>{
    if(!err) console.log('DB Connected');
    else console.log('Error: ',err);
});


//middleware
app.use(express.json());
app.use('/',BookRoutes);

app.listen(3000,(err)=>{
    if(err) console.log("Error: ",err)
    else console.log("Server listening on port 3000");
})