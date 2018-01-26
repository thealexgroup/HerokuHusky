//		** items to fix** //
/*

Hash password on input

What does logout do?  I don't think it destroys anything in session.

Write delete on.click event so we don't have to escape email when deleting records

Create the timers and other puppy info

Student Add page look and feel

Student Delete page look and feel, take out the logout button

*/

var express = require('express');
var app = express();
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv').load();
var exphbs = require('express-handlebars');
var cookieParser = require('cookie-parser');

var authController = require('./app/controllers/authcontroller.js');

//for BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

var routes = require("./app/routes/api-routes.js")(app);

var PORT = process.env.PORT || 3000;


//For Passport 

//session secret
app.use(session({ secret: 'husky love', resave: true, saveUninitialized: true}));

app.use(passport.initialize());
//persistent login sessions
app.use(passport.session());

//For Handlebars

app.set('views', './app/views')
app.engine('handlebars', exphbs({

	defaultLayout: 'main',
	layoutsDir: "./app/views/layouts/",
	extname: '.handlebars'


}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
	res.render('login');
});


// app.get('/logout', function(req, res) {
// 	res.render('login');
// });

app.get('/add', function(req, res) {
	res.render('admin_add');
})


app.use(express.static('public'));

var models = require("./app/models");

//Routes
var authRoute = require('./app/routes/auth.js')(app, passport);

//load passport strategies 
require('./app/config/passport/passport.js')(passport, models.Students); //TSA maybe change to caps!

//Sync Database
//importing the models, then calling the sequelize sync function
models.sequelize.sync().then(function() {
	console.log("All Good. Database looks fine")
}).catch(function(err) {
	console.log(err, "Something went wrong with the Database Update")
});



app.listen(PORT, function(err) {
	if (!err) 
		console.log("Site is live on " + PORT);
	else console.log(err)
});