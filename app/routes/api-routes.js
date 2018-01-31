// // *********************************************************************************
// // html-routes.js - this file offers a set of routes for sending users to the various html pages
// // *********************************************************************************
// // Dependencies
// // =============================================================

var path = require("path");
var db = require("../models");
var Sequelize = require('sequelize');
var passport = require('passport');
var bCrypt = require('bcrypt-nodejs');
require('./auth.js');


// // Routes
// // =============================================================
module.exports = function(app, passport) {

  //student get and post routes
  app.get("/student/get/:id", function(req, res) {
    db.dogs.findOne({
      where:  {
        id: req.params.id
      }
    }).then(function(results) {
      res.json(results);
    });
  });

//student get and post routes

  app.get("/student/puppy1/:geno", function(req, res) {
    db.dogs.findOne({
      where:  Sequelize.where(
        Sequelize.cast(Sequelize.col('genoType'), 'BINARY'), {$like: req.params.geno})
    }).then(function(results) {
      res.json(results);
    });
  });

  app.put("/student/update", function(req, res) {

    db.students.update({
      initial_Parent: req.body.initial_Parent,
      first_Mate: req.body.first_Mate,
      first_Offspring: req.body.first_Offspring,
      first_Genotype: req.body.first_Genotype,
      first_HuskyImage: req.body.first_HuskyImage//,
//      first_createdAt: req.body.first_createdAt
    }, {
      where: {
        student_Email: newEmail
      }
    }).then(function(result) {
      res.render("login", result);
    });
  });

  // cms route loads cms.html
  app.get("/admin", function(req, res) {
    // res.sendFile(path.join(__dirname, "../public/admin.html"));
    db.students.findAll({

    }).then(function(result) {
      // response.json(result);
      var hbsObject = { 
        Students: result
      };
      // res.json(hbsObject);
      res.render("admin", hbsObject);
    });
    
  });

  // route loads the add students page, where teachers will enter a new student into the student table
  app.post("/admin_add", function(req, res) {


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
      console.log("The error is: " + err);
      console.log(err.errors[0].message);
      res.status(400); res.send("Sorry, we couldn't add that student.  Here's why: " + err.errors[0].message);
    });

  });

  // route loads the add students page, where teachers will enter a new student into the student table

  app.get("/logout", function(req, res) {
    res.render("login");
  });


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



};











