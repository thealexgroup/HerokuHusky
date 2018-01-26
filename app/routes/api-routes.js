// // *********************************************************************************
// // html-routes.js - this file offers a set of routes for sending users to the various html pages
// // *********************************************************************************
// // Dependencies
// // =============================================================

var path = require("path");
var db = require("../models");
var Sequelize = require('sequelize');
var passport = require('passport');
require('./auth.js');


// // Routes
// // =============================================================
module.exports = function(app, passport) {

  //student get and post routes
  app.get("/student/get/:id", function(req, res) {
    db.Dogs.findOne({
      where:  {
        id: req.params.id
      }
    }).then(function(results) {
      res.json(results);
    });
  });

//student get and post routes

  app.get("/student/puppy1/:geno", function(req, res) {
    db.Dogs.findOne({
      where:  Sequelize.where(
        Sequelize.cast(Sequelize.col('genoType'), 'BINARY'), {$like: req.params.geno})
    }).then(function(results) {
      res.json(results);
    });
  });

  app.put("/student/update", function(req, res) {

    db.Students.update({
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
    db.Students.findAll({

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

    db.Students.create({
      student_Id: req.body.student_Id,
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

  app.get("/admin_delete", function(req, res) {
    res.render("admin_delete");
  });


  app.post("/admin_delete/:student_Email", function(req, res) {
  
    db.Students.destroy({
      where: {
        student_Email: req.params.student_Email
      }
    }).then(function(result) {
      res.render("admin_delete", result);
      // res.json(result);
    });
  });



};











