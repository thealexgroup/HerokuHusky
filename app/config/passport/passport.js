var bCrypt = require('bcrypt-nodejs');

var Students = require("../../models/students.js");

module.exports = function(passport, students) {
	var User = students; 
	var LocalStrategy = require('passport-local').Strategy;

	passport.use('student-login', new LocalStrategy(

		{
			usernameField: 'email',
			passwordField: 'password',
			passReqToCallback: true
		},

		function(req, email, password, done) {

			//compares password entered with the bCrypt comparison method 
			//did we store our password with bCrypt
			var isValidPassword = function(userpass, password) {

				return bCrypt.compareSync(password, userpass);
			}

			User.findOne({

			 	where: {
			 		student_Email: email
			 	}
			 }).then(function(user) {
				console.log(user);
				if (!user) {

					return done(null, false, {
						message: "ID does not exist"
					});
				}

				if (!isValidPassword(user.student_Id, password)) {
					return done(null, false, {
						message: "Incorrect password"
					});
				}

				var UserInfo = user.get();
				return done(null, UserInfo);

			}).catch(function(err) {
				console.log("Error:", err);

				return done(null, false, {
					message: "Something went wrong with your Login"
				});
			});

		}

	));	

	//serialize 
	passport.serializeUser(function(user, done) {

		done(null, user.id);
	});

	//deserialize user 
	passport.deserializeUser(function(id, done) {

		User.findById(id).then(function(user) {
			if (user) {
				done(null, user.get());
			} else {
					done(user.errors, null);
				}
		});	
	});

}		
