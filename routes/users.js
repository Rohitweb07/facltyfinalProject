const express=require('express');
const router=express.Router();
const passport=require('passport');
 const checkAuthentication=require('../config/passport-local-strategy');
const userController=require('../controllers/user_conroller');
const home_controller=require('../controllers/home_controller');
const responsiInfo_controller=require('../controllers/responsiInfo_controller');
const academicInfo_controller=require('../controllers/otherAcademic_controller');
const thesisSuper_controller=require('../controllers/thesisSuper_controller');
const image_controller=require('../controllers/image_controller');

router.get('/profile',passport.checkAuthentication, userController.profile);
router.get('/detailsDashboard',home_controller.detailsdashboard);
router.get('/detailsDashboard/responsi/:email',responsiInfo_controller.responsiInfoShow);
router.get('/detailsDashboard/otheracademic/:email',academicInfo_controller.academicInfoShow);
router.get('/detailsDashboard/thesisSuper/:email',thesisSuper_controller.thesisSuperInfoShow);

router.get('/sign-up',userController.signUp);
router.get('/sign-in',userController.signIn);
router.get('/checkfaculty',userController.checkfaculty);
router.post('/create',userController.create);
// router.post('/detailsDashboard/imageupload/:email',image_controller.uploadprofile);


//use passport as middle ware to authenticate 
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/users/sign-in'},

) ,userController.createSession);



//use passport as middleware to authenticate cardfaculty

router.get('/sign-out',userController.signOut);

module.exports=router;