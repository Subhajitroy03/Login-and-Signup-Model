const express=require("express")
const router=express.Router();
const User = require("../models/user");
//landing page
router.get("/",async(req,res)=>{
    return res.render("index")

});
//signup page
router.get('/signup', (req, res) => {
    res.render('signup', { messages: req.flash() }); // Pass all flash messages to the view
});

router.post("/signup",(req,res)=>{
    body=req.body;
    if (body.Password === body.Confirm_Password) {
        // Assuming you save the user here
        User.create({
            Roll: body.Roll,
            Name: body.Name,
            Department: body.Department,
            Semester: body.Semester,
            Gender: body.Gender,
            Mail: body.Mail,
            Password: body.Password,
        })
        .then(() => {
            req.flash('success', 'Signup Successful!');
            res.redirect('/user/signup'); // Redirect to avoid resubmission on refresh
        })
        .catch((err) => {
            req.flash('error', 'Error during Signup');
            res.redirect('/user/signup');
        });
    }else{
        req.flash('error', 'Password did not match');
        return res.redirect("/user/signup");
    }

    
});
//mainpage
router.get('/mainpage', (req, res) => {
    res.render('mainpage')
});
//login page
router.get('/login', (req, res) => {
    res.render('login', { messages: req.flash() })
});
router.post("/login",(req,res)=>{
    const body=req.body;
    User.findOne({ Roll: body.Roll })
    .then((user_rollno) => {
        if (user_rollno.Password==body.Password) {
            return res.redirect("/user/mainpage");
        } else {
            req.flash('error', 'Wrong Password');
            return res.redirect("/user/login");
        }
    })
    .catch((err) => {
        req.flash('error', "User Not Registered...");
        return res.redirect("/user/login");
    });

    
});
module.exports=router;

