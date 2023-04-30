const express=require('express');
const router=express.Router();
const passport=require('passport');

const facultycardController=require('../controllers/facultyCard_controller');

router.get('/facultyform',facultycardController.facultyform);
router.get('/cardfacultysign-In',facultycardController.cardfacultysignin);
router.post('/create',facultycardController.create);
router.get('/destroy/:id', passport.checkAuthentication, facultycardController.destory);

router.post('/cardfacultycreateSession',facultycardController.cardfacultycreateSession);



router.post('/cardfacultycreateSession',passport.authenticate(
    'local',
    {failureRedirect:'/facultycard/cardfacultysign-In'},

) ,facultycardController.cardfacultycreateSession);

module.exports=router;