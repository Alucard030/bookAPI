const express=require('express');
const router=express.Router();
const controller=require('../Controllers/controller')


router.get('/',controller.getBooks);
router.post('/',controller.setBook);
router.get('/:title',controller.getBookByTitle);
router.patch('/:title',controller.updateBook);
router.delete('/:title',controller.removeBook);

module.exports=router;