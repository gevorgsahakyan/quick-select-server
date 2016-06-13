const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('../config');
const LocalStrategy = require('passport-local');

// Local strategy
const localOptions = { usernameField: 'email' };

// localLogin is about signin action, like a entering login and password and checking it
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
	User.findOne({ email }, (err, user) => {
		if(err) { return done(err); }
		if(!user) { return done(null, false); }

		user.comparePassword(password, (err, isMatch) => {
			if(err) { return done(err); }
			if(!isMatch) { return done(null, false); }

			return done(null, user);
		});
	});
});

// Setup & create jwt strategy, use in passport
// jwtLogin is about to be signed in, to have a token to get some page content
const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
	User.findById(payload.sub, (err, user) => {
		if(err) { done(err, false); }

		if(user) {
			return done(null, user);
		} else {
			return done(null, false);
		}
	});
});

passport.use(jwtLogin);
passport.use(localLogin);
