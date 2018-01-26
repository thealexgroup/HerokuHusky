
var Validation = require('jquery-validation');


$(function() {

  // Initialize form validation on the admin_add form.
  // It has the name attribute "admin_add"
  $("form[name='admin_add']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      student_Id: "required",
      student_Name: "required",
      student_Email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      student_Hour: {
        required: true,
        minlength: 3
      }
    },
    // Specify validation error messages
    messages: {
      student_Name: "Please enter the student's name",
      student_Id: "Please enter the student's ID",
      student_TeacherName: {
        required: "Please provide the Teacher's Name",
        minlength: "Your password must be at least 5 characters long"
      },
      email: "Please enter a valid email address"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});

//https://www.npmjs.com/package/jquery-validation

//https://www.sitepoint.com/basic-jquery-form-validation-tutorial/

