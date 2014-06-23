'use strict';

module.exports = function (mongoose, bcrypt) {
	// define the schema for our user model
	var userSchema = mongoose.Schema({

	    local            : {
	        username     : String,
	        password     : String,
	    }
	});

	// generating a hash
	userSchema.methods.generateHash = function(password) {
	    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
	};

	// checking if password is valid
	userSchema.methods.validPassword = function(password) {
	    return bcrypt.compareSync(password, this.local.password);
	};

	return mongoose.model('User', userSchema);
}