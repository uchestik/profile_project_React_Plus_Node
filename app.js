require('import-export')
require('babel-core/register')({ presets: ['es2015', 'react','react-app'] })


var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var expressSanitizer = require ('express-sanitizer');
var passport = require('passport');
var localStrategy = require('passport-local');
var passportLocalMongoose = require('passport-local-mongoose');
var methodOverride = require('method-override');
var cors = require('cors');



const http = require('http')
const path = require('path')
const fs = require('fs')
const react = require('react')
const reactDomServer = require('react-dom/server')
const reactRouter = require('react-router')

const renderToString = reactDomServer.renderToString
const match = reactRouter.match
const RouterContext = reactRouter.RouterContext

const routes = require('./src/components/App').default()

// For this project we will need 2 collections in the model folder. The signIn and comment collection. Not doing authentication, just have the code to show. Simple App
// Authentication API is built but not used
// Delete and Update API built but not used. This project is meant to showcase basic skills.

var Comment = require('./models/comments');
var SignIn = require('./models/sign_in');
var User = require('./models/user');

//database url
// mongoose.connect('mongodb://localhost:27017/sams_profile');
mongoose.connect("mongodb://uchestik:abcdefgh1234@ds147979.mlab.com:47979/profile_project");
// mongoose.connect(process.env.DATABASEURL);

app.use(cors())
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static(__dirname + './public'));
app.server = http.createServer(app)
app.use(express.static(path.join(__dirname, 'build')));

// parse application/json
app.use(bodyParser.json())



// express-session
app.use(require('express-session')({
    secret:'dab',
    resave:false,
    saveUninitialized:false
}));

// the next two lines enanles passport to function inside of the app
app.use(passport.initialize());
app.use(passport.session());


//user.authenticate, user.serializeuser, user.deserializeuser
// are methods that are derived from passportlocalMongoose
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



//creating our middleware that passes req.user to every page
app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
});



// we will build a REST API with CRUD FUNCTIONALITY 
// This project will be light on comments initially becasue I'm trying 
// to push to production in 3 days.



// the signIn API routes

app.get('/signin', function(req,res){
    SignIn.find({}).sort({created:-1}).exec(function(err,foundSignInMessages){
        if (err){
            console.log(err);
        } else{
            res.json(foundSignInMessages);
            // res.send(foundSignInMessages);
            // res.json([foundSignInMessages]);
        }
    });
});

app.post('/signin', function(req,res){
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var companyName = req.body.companyName;
    var position = req.body.position;
    var companyLogo = req.body.companyLogo;
    var message = req.body.message;

    var newSignIn = {firstName:firstName, lastName:lastName, companyName:companyName,
    position:position, companyLogo:companyLogo, message:message};
    
    SignIn.create(newSignIn, function(err,newSignIn){
        if (err){
            console.log(err);
        } else{
            res.json(newSignIn);
        }
    });
});

// SignIn.create({
//     firstName:'Robert',
//     lastName:'Howard',
//     companyName:'Klein Technologies',
//     position:'Executive Recruiter',
//     message:'Hi Uchenna, I am pleased with what I see as it pertains to your website. I would like to make you an offer to work with us as a Software engineer'
// });

app.put('/signin/edit/:id', function(req,res){
    var like = req.body.like;
    var addLike= {like:like};
    SignIn.findByIdAndUpdate(req.params.id, addLike, function(err,updatedVersion){
        if(err){
            console.log(err);
        } else{
            res.json(updatedVersion);
        }
    });
});

app.delete('/signin/:id', function(req,res){
    SignIn.findByIdAndRemove(req.params.id, function(err,deleted){
        if(err){
            console.log(err);
        } else{
            res.json({deleted});
        }
    });
});

//comments API routes

//ADD A NEW COMMENT
app.post('/signin/:id/comment', function(req,res){

    var firstName = req.body.firstName;
    var companyName = req.body.companyName;
    var comment = req.body.comment;

    var newComment = {firstName:firstName,companyName:companyName,comment:comment};

    SignIn.findById(req.params.id, function(err,foundSignIn){
        if(err){
            console.log(err);
        } else{
            Comment.create(newComment, function(err,createdComment){
                if (err){
                    console.log(err);
                } else{
                    createdComment.save();
                    foundSignIn.comments.push(createdComment);
                    foundSignIn.save();
                    res.json(createdComment);
                }
            });
        }
    });
});

//DELETE A COMMENT
app.delete('/signin/:id/comment/:commentId', function(req,res){
    Comment.findByIdAndRemove(req.params.commentId, function(err,deleted){
        if(err){
            console.log(err);
        } else{
            res.json({deleted});
        }
    });
});

// authentication routes
// app.post('/signup', function(req,res){
//     User.register(new User({username:req.body.username}), req.body.password, function(err,user){
//         if (err){
//             console.log(err);
//         } 
//         passport.authenticate('local') (req, res, function(){
//             res.json({});
//         });
//     });
// });

// app.post('/login', passport.authenticate('local', {
//     successRedirect:'/',
//     failureRedirect:'/africanhero',
// }), function(req,res){});

app.get('*', (req, res) => {
    
      const error = () => res.status(404).send('404')
      const htmlFilePath = path.join( __dirname, './build', 'index.html' )
    
      fs.readFile( htmlFilePath, 'utf8', (err, htmlData) => {
        if(err) {
          error()
        }
        else {
          match({ routes, location: req.url }, (err, redirect, ssrData) => {
            if(err) {
              error()
            }
            else if(redirect) {
              res.redirect(302, redirect.pathname + redirect.search)
            }
            else if(ssrData) {
              const ReactApp = renderToString( react.createElement(RouterContext, ssrData) )
              const RenderedApp = htmlData.replace('{{SSR}}', ReactApp)
              res.status(200).send(RenderedApp)
            }
            else {
              error()
            }
          })
        }
      })
    })



// var PORT = process.env.PORT || 3000;

// app.listen(PORT, function(err, success){
//     if (err){
//         console.log(err);
//     } else{
//         console.log('server is running...');
//     }
// });
app.listen(process.env.PORT, process.env.IP);