const express=require('express');
const router=express.Router();
const passport=require('passport');
const postController=require('../controllers/post_controllers');
const userController=require('../controllers/user_conroller');

router.post('/create',passport.checkAuthentication,postController.create);
router.get('/about',postController.about);
router.get('/profile',passport.checkAuthentication,userController.profile);
router.get('/responsbility',postController.responsbility);
router.get('/destroy/:id', passport.checkAuthentication, postController.destroy);
 

module.exports=router;