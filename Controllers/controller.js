const BookCollection=require('../Models/model');

const getBooks= async(req,res,next)=>{
    try {
        books = await BookCollection.find({});
        return res.json({data : books});
    } catch (err){
        return res.status(400).json({err});
    }
}

const setBook= async (req,res,next)=> {
    try {
        book= new BookCollection(req.body)
        await book.save();
        return res.json({data: book});
    } catch(err){
        return res.status(400).json({err});
    }
}

const getBookByTitle= async(req,res,next)=>{
    try {
        books = await BookCollection.find({title: req.body.title});
        return res.json({data : books});
    } catch (err){
        return res.status(400).json({err});
    }
}

const updateBook= async(req,res,next)=>{
    try {
        books = await BookCollection.updateOne({title: req.body.title},{$set:{title:req.body.title,author:req.body.author,rating:req.body.rating}});
        return res.json({data : books});
    } catch (err){
        return res.status(400).json({err});
    }
}

const removeBook= async(req,res,next)=>{
    try {
        books = await BookCollection.removeOne({title: req.body.title});
        return res.json({data : books});
    } catch (err) {
        return res.status(400).json({err});
    }
}

module.exports={
    getBooks,
    getBookByTitle,
    setBook,
    updateBook,
    removeBook
}

