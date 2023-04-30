const passport=require('passport');

const LocalStrategy=require('passport-local').Strategy;
 
const Faculty=require('../models/faculty');
 const FacultyCard=require('../models/facultyCard');
//authentication using passport js
passport.use(new LocalStrategy({
    usernameField: 'email'
},
async  function(email, password,done){
    // find a user and establish the identity
    try{
     const user=  await Faculty.findOne({email: email}) ;
  

         if (!user || user.password != password){
          console.log('Invalid Username/Password');
              return done(null, false);
        }
        
       return done(null,user);
   
} catch(err) {
    console.log(err);
     }
}


));







// serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user, done){
done(null, user.id);
});



// deserializing the user from the key in the cookies
passport.deserializeUser(async function(id, done){
try{
const user= await  Faculty.findById(id);

    return done(null, user);

}catch(err){
console.log(err);   
}
});




// check if the user is authenticated
passport.checkAuthentication = function(req, res, next){
// if the user is signed in, then pass on the request to the next function(controller's action)
if (req.isAuthenticated()){
  
    return next();
}

// if the user is not signed in
return res.redirect('/users/sign-in');
}

passport.setAuthenticatedUser = function(req, res, next){
if (req.isAuthenticated()){
    // req.user contains the current signed in user from the session cookie and we are just sending this to the locals for the views
    res.locals.user = req.user;
}

next();
}



 module.exports = passport;

// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;

// const Faculty = require('../models/faculty');
// const FacultyCard = require('../models/facultyCard');

// // Faculty authentication using email and password
// passport.use('faculty-local', new LocalStrategy({
//     usernameField: 'email'
// },
// async function(email, password, done) {
//     try {
//         const user = await Faculty.findOne({ email: email });

//         if (!user || user.password !== password) {
//             console.log('Invalid email or password');
//             return done(null, false);
//         }

//         return done(null, user);
//     } catch (err) {
//         console.log(err);
//         return done(err);
//     }
// }));

// // FacultyCard authentication using facultyId
// passport.use('facultyCard-local', new LocalStrategy({
//     usernameField: 'facultyId'
// },
// async function(facultyId, password, done) {
//     try {
//         const user = await FacultyCard.findOne({ facultyId: facultyId });

//         if (!user) {
//             console.log('Invalid facultyId');
//             return done(null, false);
//         }

//         return done(null, user);
//     } catch (err) {
//         console.log(err);
//         return done(err);
//     }
// }));

// // Serialize the user to decide which key is to be kept in the cookies
// passport.serializeUser(function(user, done) {
//     if (user instanceof Faculty) {
//         done(null, { id: user.id, type: 'faculty' });
//     } else if (user instanceof FacultyCard) {
//         done(null, { id: user.id, type: 'facultyCard' });
//     } else {
//         done(new Error('Unknown user type'));
//     }
// });


// passport.deserializeUser(async function(id, done){
// try{
// const user= await  Faculty.findById(id);

//     return done(null, user);

// }catch(err){
// console.log(err);   
// }
// });
// // Deserialize the user from the key in the cookies
// // passport.deserializeUser(async function(data, done) {
// //     if (data.type === 'faculty') {
// //         try {
// //             const user = await Faculty.findById(data.id);
// //             done(null, user);
// //         } catch (err) {
// //             done(err);
// //         }
// //     } else if (data.type === 'facultyCard') {
// //         try {
// //             const user = await FacultyCard.findById(data.id);
// //             done(null, user);
// //         } catch (err) {
// //             done(err);
// //         }
// //     } else {
// //         done(new Error('Unknown user type'));
// //     }
// // });

// // Check if the user is authenticated
// passport.checkAuthentication = function(req, res, next) {
//     if (req.isAuthenticated()) {
//         return next();
//     }

//     return res.redirect('/users/sign-in');
// };

// // Set the authenticated user in res.locals for views
// passport.setAuthenticatedUser = function(req, res, next) {
//     if (req.isAuthenticated()) {
//         res.locals.user = req.user;
//     }

//     next();
// };

// module.exports = passport;
