const express=require('express');
const router=express.Router();
const passport=require('passport');
const basicInfoController=require('../controllers/basicInfo_controllers');
const userController=require('../controllers/user_conroller');

    router.post('/create',passport.checkAuthentication,basicInfoController.create);
    router.get('/basicInfoInput',passport.checkAuthentication,basicInfoController.basicInfoInput);
    router.get('/basicInfoShow/:email',basicInfoController.basicInfoShow);
    // router.get('/basicInfoShow',basicInfoController.basicInfoShowW);
    // router.get('/basicInfoInput',basicInfoController.basicInfoInput);
    router.get('/facultyInfoOptions',passport.checkAuthentication,basicInfoController.basicInfoInputOption);
// router.get('/responsbility',postController.responsbility);
    router.get('/destroy/:id', passport.checkAuthentication, basicInfoController.destroy);
    // router.get('/edit/:id',basicInfoController);

module.exports=router;