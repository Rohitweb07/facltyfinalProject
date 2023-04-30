const express=require('express');
const router=express.Router();
const passport=require('passport');
 const checkAuthentication=require('../config/passport-local-strategy');
const userController=require('../controllers/user_conroller');

router.get('/profile',passport.checkAuthentication, userController.profile);

router.get('/sign-up',userController.signUp);
router.get('/sign-in',userController.signIn);
router.get('/checkfaculty',userController.checkfaculty);
router.post('/create',userController.create);



//use passport as middle ware to authenticate 
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/users/sign-in'},

) ,userController.createSession);



//use passport as middleware to authenticate cardfaculty

router.get('/sign-out',userController.signOut);

module.exports=router;