// // *********************************************************************************
// // html-routes.js - this file offers a set of routes for sending users to the various html pages
// // *********************************************************************************
// // Dependencies
// // =============================================================

var path = require("path");
var Sequelize = require('sequelize');
var passport = require('passport');
var bCrypt = require('bcrypt-nodejs');

//We used this to get the student email they logged in with
//require('./auth.js');

//require models, or at least the index in models
var db = require("../models");

var isLoggedIn = function (req, res, next) {
    if (req.isAuthenticated())
      return next();
  };

// export routs
// // =============================================================
module.exports = function(app, passport) {


//this route gets dog information from the dog table to use in the genetic combinations
  app.get("/student/get/:id", function(req, res) {
    db.dogs.findOne({
      where:  {
        id: req.params.id
      }
    }).then(function(results) {
      res.json(results);
    });
  });


//this route gets the genetic outcome. it's case sensitive, so cast the variable as binary as there 
//are duplicates by string but NOT by case.
  app.get("/student/puppy1/:geno", function(req, res) {
    db.dogs.findOne({
      where:  Sequelize.where(
        Sequelize.cast(Sequelize.col('genoType'), 'BINARY'), {$like: req.params.geno})
    }).then(function(results) {
      res.json(results);
    });
  });


//admin route to display all student information on admin page
  app.get("/admin", function(req, res) {

    db.students.findAll({

    }).then(function(result) {
      var hbsObject = { 
        Students: result
      };
      // render the object to admin page to use in the table.
      res.render("admin", hbsObject);
    });
    
  });

  // route loads the add students page, where teachers will enter a new student into the student table
  app.post("/admin_add", function(req, res) {

    //this hashes the password, or student id in this case, in the database.  
    var hashPass = bCrypt.hashSync(req.body.student_Id);

    db.students.create({
      student_Id: hashPass,
      student_Email: req.body.student_Email,
      student_Name: req.body.student_Name,
      student_Hour: req.body.student_Hour,
      student_TeacherName: req.body.student_TeacherName
    }).then(function(result) {
      res.render("admin_add", result);
    }).catch(function(err){
      console.log(err.errors[0].message);
      res.status(400); res.send("Sorry, we couldn't add that student.  Here's why: " + err.errors[0].message);
    });

  });

//logout page, just login page
  app.get("/logout", function(req, res) {
    res.render("login");
  });


//delete student route from admin, if they would like to delete a student from the database
  app.post("/admin_delete/delete", function(req, res) {
  
    db.students.destroy({
      where: {
        id: req.body.id
      }
    }).then(function(result) {
      res.redirect("/admin");
      // res.json(result);
    });
  });


//student find route, get the information on a student based on email used to login
app.get("/student/find", isLoggedIn, function(req, res) {
    db.students.findOne({
      where:  {
        student_Email: req.user.student_Email
      }
    }).then(function(results) {
      res.json(results);
    });
  });


//these are the routes for updating each puppy

//first route
  app.put("/student/update", isLoggedIn, function(req, res) {

//take information from form submission, update the students table with information
//for each column

    db.students.update({
      initial_Parent: req.body.initial_Parent,
      first_Mate: req.body.first_Mate,
      first_Offspring: req.body.first_Offspring,
      first_Genotype: req.body.first_Genotype,
      first_HuskyImage: req.body.first_HuskyImage,
      first_createdAt: req.body.first_createdAt
    }, {
      where: {
        student_Email: req.user.student_Email
      }
    }).then(function(result) {
      res.render("login", result);
    });
  });

//second update route, same as above except update second submission
  app.put("/student/update2", isLoggedIn, function(req, res) {

    db.students.update({
      second_Mate: req.body.second_Mate,
      second_Offspring: req.body.second_Offspring,
      second_Genotype: req.body.second_Genotype,
      second_HuskyImage: req.body.second_HuskyImage,
      second_createdAt: req.body.second_createdAt
    }, {
      where: {
        student_Email: req.user.student_Email
      }
    }).then(function(result) {
      res.render("login", result);
    });
  });

//third update route
  app.put("/student/update3", isLoggedIn, function(req, res) {

    db.students.update({
      third_Mate: req.body.third_Mate,
      third_Offspring: req.body.third_Offspring,
      third_Genotype: req.body.third_Genotype,
      third_HuskyImage: req.body.third_HuskyImage,
      third_createdAt: req.body.third_createdAt
    }, {
      where: {
        student_Email: req.user.student_Email
      }
    }).then(function(result) {
      res.render("login", result);
    });
  });

//fourth update route
app.put("/student/update4", isLoggedIn, function(req, res) {

    db.students.update({
      fourth_Mate: req.body.fourth_Mate,
      fourth_Offspring: req.body.fourth_Offspring,
      fourth_Genotype: req.body.fourth_Genotype,
      fourth_HuskyImage: req.body.fourth_HuskyImage,
      fourth_createdAt: req.body.fourth_createdAt
    }, {
      where: {
        student_Email: req.user.student_Email
      }
    }).then(function(result) {
      res.render("login", result);
    });
  });

//fifth update route
app.put("/student/update5", isLoggedIn, function(req, res) {

    db.students.update({
      fifth_Mate: req.body.fifth_Mate,
      fifth_Offspring: req.body.fifth_Offspring,
      fifth_Genotype: req.body.fifth_Genotype,
      fifth_HuskyImage: req.body.fifth_HuskyImage,
      fifth_createdAt: req.body.fifth_createdAt
    }, {
      where: {
        student_Email: req.user.student_Email
      }
    }).then(function(result) {
      res.render("login", result);
    });
  });

//sixth update route
app.put("/student/update6", isLoggedIn, function(req, res) {

    db.students.update({
      sixth_Mate: req.body.sixth_Mate,
      sixth_Offspring: req.body.sixth_Offspring,
      sixth_Genotype: req.body.sixth_Genotype,
      sixth_HuskyImage: req.body.sixth_HuskyImage,
      sixth_createdAt: req.body.sixth_createdAt
    }, {
      where: {
        student_Email: req.user.student_Email
      }
    }).then(function(result) {
      res.render("login", isLoggedIn, result);
    });
  });

//seventh update route
app.put("/student/update7", isLoggedIn, function(req, res) {

    db.students.update({
      seventh_Mate: req.body.seventh_Mate,
      seventh_Offspring: req.body.seventh_Offspring,
      seventh_Genotype: req.body.seventh_Genotype,
      seventh_HuskyImage: req.body.seventh_HuskyImage,
      seventh_createdAt: req.body.seventh_createdAt
    }, {
      where: {
        student_Email: req.user.student_Email
      }
    }).then(function(result) {
      res.render("login", result);
    });
  });

//eigth and final update route
app.put("/student/update8", isLoggedIn, function(req, res) {

  db.students.update({
      eighth_Mate: req.body.eighth_Mate,
      eighth_Offspring: req.body.eighth_Offspring,
      eighth_Genotype: req.body.eighth_Genotype,
      eighth_HuskyImage: req.body.eighth_HuskyImage,
      eighth_createdAt: req.body.eighth_createdAt
    }, {
      where: {
        student_Email: req.user.student_Email
      }
    }).then(function(result) {
      res.render("login", result);
    });
  });

};











