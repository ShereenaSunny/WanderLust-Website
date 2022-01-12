const express               =  require('express'),
      app                   =  express(),
      mongoose              =  require("mongoose"),
      passport              =  require("passport"),
      bodyParser            =  require("body-parser"),
      LocalStrategy         =  require("passport-local"),
      passportLocalMongoose =  require("passport-local-mongoose"),
      User                  =  require("./models/user");




//Connecting database and add the link of your connection inside ""
mongoose.connect("",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

app.use(require("express-session")({
    secret:"Any normal Word",      
    resave: false,          
    saveUninitialized:false    
}));



passport.serializeUser(User.serializeUser());    
passport.deserializeUser(User.deserializeUser());
passport.use(new LocalStrategy(User.authenticate()));

app.set("view engine","ejs");
app.use(express.static('public'));
app.use(express.static('assets'));
app.use(bodyParser.urlencoded(
      { extended:true }
))
app.use(passport.initialize());
app.use(passport.session());


app.get("/", (req,res) =>{
    res.render("home");
})

app.get("/userprofile",isLoggedIn ,(req,res) =>{
    res.render("userprofile");
})
//Auth Routes
app.get("/login",(req,res)=>{
    res.render("login");
});

app.post("/login",passport.authenticate("local",{
    successRedirect:"/",
    failureRedirect:"/login"
}),function (req, res){

});

app.get("/register",(req,res)=>{
    res.render("register");
});

app.post("/register",(req,res)=>{
    
    User.register(new User({username: req.body.username,
        phone:req.body.phone,}),
        req.body.password,function(err,user){
        if(err){
            console.log(err);
            res.render("register");
        }
    passport.authenticate("local")(req,res,function(){
        res.redirect("/login");
    })    
    })
})


app.get("/Packages", (req,res)=>{
    res.render("Packages");
})

app.get("/australia",(req,res)=>{
    res.render("australia");
})

app.get("/africa",(req,res)=>{
    res.render("africa");
})

app.get("/europe", (req,res)=>{
    res.render("europe");
})

app.get("/south-america",(req,res)=>{
    res.render("south-america");
})

app.get("/aasia",(req,res)=>{
    res.render("aasia");
})

app.get("/north-america",(req,res)=>{
    res.render("north-america")
})

function isLoggedIn(req,res,next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}



//Listen On Server

app.listen(process.env.PORT ||3000,function (err) {
    if(err){
        console.log(err);
    }else {
        console.log("Server Started At Port 3000");
    }
      
});
