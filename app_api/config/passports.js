const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.use(new LocalStrategy({
    usernameField: 'email'
},
(username, password, done) => {
    User.findOne({ email: username }, (err, user) => {
        if (err) { return done(err); } 
        if (!user) {
            console.log("passports.findOne#userExists")
            return done(null, false, {
                message: 'Incorrect username.'
            }); 
        } 
        if (!user.validPassword(password)) {
            console.log("passports.validPassword#passwordIsInvalid") // issue starts somewhere around here
            return done(null, false, {
                message: 'Incorrect password.'
            });
        }
        return done(null, user);
    });
}
));