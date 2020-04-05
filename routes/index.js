const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller');
router.get('/',homeController.shil);
router.post('/submit_it',homeController.shr);
router.post('/delete',homeController.delete);
module.exports=router;