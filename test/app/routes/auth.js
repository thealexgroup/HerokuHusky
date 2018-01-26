var models = require("../../app/models");
var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {

	app.get('/login', authController.login);

	app.get('/admin_add', isLoggedIn, authController.admin_add);	

	app.post('/login', passport.authenticate('student-login', {
			successRedirect: '/student', 

			failureRedirect: '/login',
		}
	));	

	app.get('/admin', isLoggedIn, authController.admin);	

	app.get('/student', isLoggedIn, exportUser, isAdmin, authController.student);

	app.get('/student/add', isLoggedInAdd, authController.admin);	

	app.get('/logout', authController.logout);

// Functions to use above

	function isLoggedInAdd(req, res, next) {
		if (req.isAuthenticated())
			return next();
		res.redirect('/student/add');
	}

	function isLoggedIn(req, res, next) {
		if (req.isAuthenticated())
			return next();
		res.redirect('/student');
	}

	function isAdmin(req, res, next) {
		if (req.user.student_Email === "husky_admin@bvnw.edu")  {
		res.redirect('/admin');
		} else {
		next();
		}
	}
	
	function exportUser(req, res, next) {
		if (req.isAuthenticated())
		newEmail = req.user.student_Email;
		exports.newEmail = newEmail;
		next();
	}

}


