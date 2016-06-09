const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');

function createToken(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = (req, res, next) => {
    res.json({ token: createToken(req.user) });
}

exports.signup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password) {
        return res.status(422).send({
            error: 'You must provide email and password'
        });
    }

    User.findOne({ email }, (err, user) => {
        if(err) {
            return next(err);
        }

        if(user) {
            return res.status(422).send({error: 'This email already exists. Please choose another.'});
        }

        const newUser = new User({
            email: email,
            password: password
        });

        newUser.save((err) => {
            if(err) {return next(err);}
        });

        res.json({ token: createToken(newUser) });
    });
}