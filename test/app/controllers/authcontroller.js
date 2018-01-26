var exports = module.exports = {}

exports.login = function(req, res) {
	res.render('login');
}

exports.student = function(req, res) {
	res.render('student');
}	

exports.admin_add = function(req, res) {
    res.render('admin_add');
}

exports.admin = function(req, res) {
     res.render('admin');
}

exports.logout = function(req, res) {
	req.session.destroy(function(err) {
		res.redirect('/');
	});
}


