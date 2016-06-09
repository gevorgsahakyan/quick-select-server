const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Here we are defining and creating user model
// Authentication with email & password

const userSchema = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true }
});

userSchema.pre('save', function(next) { // Here an ES6 arrow function didn't work, we'll figure out it later
	const user = this;

	bcrypt.genSalt(12, (err, salt) => {
		if(err) { return next(err); }

		bcrypt.hash(user.password, salt, null, (err, hash) => {
			if(err) {return next(err)};

			user.password = hash;
			next();
		});
	});
});

userSchema.methods.comparePassword = function(canPassword, callback) { // Can't use arrow function here also
	bcrypt.compare(canPassword, this.password, (err, isMatch) => {
		if(err) { return callback(err); }

		callback(null, isMatch);
	});
}

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;