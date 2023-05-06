const { Router } = require('express');
const express=require('express');
const cookiesParser=require('cookie-parser');
const router = require('./routes');
const app=express();
const port=7992;
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');
const sassMiddleware=require('node-sass-middleware');
const path=require('path');
//used for session cookies
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');


const MongoStore = require('connect-mongo')(session);



app.use(express.urlencoded());
app.use(sassMiddleware({
    src:'./assets/scss',
    dest:'./assets/css',
    debug:true,
    outputStyle:'extended',
    prefix:'/css'
}));



app.use(cookiesParser());

//use the assets
app.use(express.static('./assets'));

app.use(expressLayouts);
//use express router





//extracting the style andextracting the script 
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//set up view engine
app.set('view engine','ejs');
app.set('views','./views');

//mongo store is used for store session cookies in the db
app.use('/uploads',express.static(__dirname +'/uploads'));


app.use(session({
  name:'finalProject',
  //to do change the secret before the deploymnet
  secret:'kuchhBhi',
  saveUninitialized:false,
  resave:false,
  cookie:{
    maxAge:(1000*60*100)
  },
  store: new MongoStore(
          {
            mongooseConnection:db,
            autoRemove: 'disabled'
        
          },
  
     
    function(err){
        console.log(err ||  'connect-mongodb setup ok');
    }
  )

}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`error while connention to the server${err}`);
    }
    console.log(`Successfully connected to the port ${port}`);
});

