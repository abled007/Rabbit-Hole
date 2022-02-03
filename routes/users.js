const router = require('express').Router();
const passport = require('passport');

router.get( 
    "/auth/google", 
    passport.authenticate("google", { scope: ["profile", "email"] }) 
    );

router.get( 
    "/oauth2callback", 
    passport.authenticate("google", { 
        successRedirect: "/upload", 
        failureRedirect: "/home", }) 
    );

router.get("/logout", 
    function (req, res) { 
        req.logout(); 
        res.redirect("/home"); 
    });

router.get("/", function (req, res) 
    { res.render("home", { user: req.user, }); 
}); 

router.get("/", function (req, res) {
    res.render('index', {
        user: req.user
    });
});



module.exports = router;