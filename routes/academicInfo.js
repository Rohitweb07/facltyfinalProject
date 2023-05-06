const express=require('express');
const router=express.Router();
const passport=require('passport');
const academicInfoController=require('../controllers/otherAcademic_controller');
const userController=require('../controllers/user_conroller');

    router.post('/create',passport.checkAuthentication,academicInfoController.create);
    router.get('/academicInfoInput',passport.checkAuthentication,academicInfoController.academicInfoInput);
    router.get('/academicInfoShow/:email',academicInfoController.academicInfoShow);
    //    router.get('/responsiInfoShow',responsiInfoController.responsiInfoShow);
    
         router.get('/destroy/:id', passport.checkAuthentication, academicInfoController.destroy);
 

module.exports=router;