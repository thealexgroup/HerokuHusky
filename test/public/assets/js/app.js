$(document).ready(function() {

//holds the final genotype for puppy
var newE = ""; 
//holds initial_Parent info
var parent = {};
//holds first_Mate info
var mate1 = {};

//var studentInfo = require("../../../routes/auth.js");
//var userInfo = studentInfo.userInfo;

$(document).on("submit", function(event) {

	    event.preventDefault();
	    var iniParent = $('input[name="initial_Parent"]').val();
//	    console.log(iniParent);
	    var fMate =  $('input[name="first_Mate"]').val();
//	    console.log(fMate);
	    checkValues(iniParent, fMate);
});

function checkValues(iniParent, fMate) {
	if ((iniParent > 81 && fMate > 81) || (iniParent < 82 && fMate < 82)) {
		$("#myModal").modal();
	} else {
		removeSubmit(iniParent, fMate);
	}
}

function removeSubmit(iniParent, fMate) {
	$("#submit").css("display", "none");
	searchFirstDog(iniParent, fMate);
}

function searchFirstDog(iniParent, fMate) {
	$.get("/student/get/" + iniParent, function(data1) {
//		console.log(data1.huskyImage);
		$("#holdfirst").html("<img src=assets/img/" + data1.huskyImage + ">");
		parent = data1;
		searchSecondDog(iniParent, fMate, data1)
	})
}

function searchSecondDog(iniParent, fMate, data1) {
	$.get("/student/get/" + fMate, function(data2) {
		$("#holdsecond").html("<img src=assets/img/" + data2.huskyImage + ">");		
		mate1 = data2;
		pickAllele1();
	})
}

//randomly choose between one or the other allele for eye color
function pickAllele1() {

	var e1 = parent.eyeColorOne;
	var e2 = parent.eyeColorTwo;
	var e3 = mate1.eyeColorOne;
	var e4 = mate1.eyeColorTwo;
	var hold1 = "";
	var hold2 = "";	

	var choose1 = Math.random();
	if (choose1 < 0.5) {
		hold1 = e1;
	} else {
		hold1 = e2;
	}
//	console.log("one " + hold1);

	var choose2 = Math.random();
	if (choose2 < 0.5) {
		hold2 = e3;
	} else {
		hold2 = e4;
	}
//	console.log("two " + hold2);	
	if ((hold1.charAt(0) === hold1.charAt(0).toLowerCase()) && 
		(hold2.charAt(0) === hold2.charAt(0).toUpperCase())) {
		newE += (hold2 + hold1);
	} else {
		newE += (hold1 + hold2);		
	}
	pickAllele2();
};

function pickAllele2() {

	var e1 = parent.coatColorOne;
	var e2 = parent.coatColorTwo;
	var e3 = mate1.coatColorOne;
	var e4 = mate1.coatColorTwo;
	var hold1 = "";
	var hold2 = "";	

	var choose1 = Math.random();
	if (choose1 < 0.5) {
		hold1 = e1;
	} else {
		hold1 = e2;
	}
//	console.log("one " + hold1);

	var choose2 = Math.random();
	if (choose2 < 0.5) {
		hold2 = e3;
	} else {
		hold2 = e4;
	}
//	console.log("two " + hold2);	
	if ((hold1.charAt(0) === "W") && 
		(hold2.charAt(0) === "G")) {
		newE += (hold2 + hold1);
	} else {
		newE += (hold1 + hold2);		
	}
//	console.log("2 " + newE);
	pickAllele3();
};

function pickAllele3() {

	var e1 = parent.tailLengthOne;
	var e2 = parent.tailLengthTwo;
	var e3 = mate1.tailLengthOne;
	var e4 = mate1.tailLengthTwo;
	var hold1 = "";
	var hold2 = "";	

	var choose1 = Math.random();
	if (choose1 < 0.5) {
		hold1 = e1;
	} else {
		hold1 = e2;
	}
//	console.log("one " + hold1);

	var choose2 = Math.random();
	if (choose2 < 0.5) {
		hold2 = e3;
	} else {
		hold2 = e4;
	}
//	console.log("two " + hold2);	
	if ((hold1.charAt(0) === "S") && 
		(hold2.charAt(0) === "L")) {
		newE += (hold2 + hold1);
	} else {
		newE += (hold1 + hold2);		
	}
//	console.log("3" + newE);
	pickAllele4();
};

function pickAllele4() {

	var e1 = parent.tongueOne;
	var e2 = parent.tongueTwo;
	var e3 = mate1.tongueOne;
	var e4 = mate1.tongueTwo;
	var hold1 = "";
	var hold2 = "";	

	var choose1 = Math.random();
	if (choose1 < 0.5) {
		hold1 = e1;
	} else {
		hold1 = e2;
	}
//	console.log("one " + hold1);

	var choose2 = Math.random();
	if (choose2 < 0.5) {
		hold2 = e3;
	} else {
		hold2 = e4;
	}
//	console.log("two " + hold2);	
	if ((hold1.charAt(0) === hold1.charAt(0).toLowerCase()) && 
		(hold2.charAt(0) === hold2.charAt(0).toUpperCase())) {
		newE += (hold2 + hold1);
	} else {
		newE += (hold1 + hold2);		
	}
//	console.log("4 " + newE);
	pickAllele5();
};

function pickAllele5() {

	var e1 = parent.sexOne;
	var e2 = parent.sexTwo;
	var e3 = mate1.sexOne;
	var e4 = mate1.sexTwo;
	var hold1 = "";
	var hold2 = "";	

	var choose1 = Math.random();
	if (choose1 < 0.5) {
		hold1 = e1;
	} else {
		hold1 = e2;
	}
//	console.log("one " + hold1);

	var choose2 = Math.random();
	if (choose2 < 0.5) {
		hold2 = e3;
	} else {
		hold2 = e4;
	}
//	console.log("two " + hold2);	
	if ((hold1.charAt(0) === "Y") && 
		(hold2.charAt(0) === "X")) {
		newE += (hold2 + hold1);
	} else {
		newE += (hold1 + hold2);		
	}
//	console.log("5 " + newE);
	searchForPuppy();
};

function searchForPuppy() {
	$.get("/student/puppy1/" + newE, function(data) {
		var date = new Date();
		console.log(date);
		var updateData = {
		initial_Parent: parent.id,
		first_Mate: mate1.id,
      	first_Offspring: data.id,
      	first_Genotype: data.genoType,
      	first_HuskyImage: data.huskyImage //,
//      	first_createdAt: req.body.first_createdAt
		}
		$("#firstpuppy").html("<br>Your FIRST puppy: <br><img src=assets/img/" + data.huskyImage + ">");
		updateStudent(updateData);
	})
}

function updateStudent(updateData) {
    $.ajax({
      method: "PUT",
      url: "/student/update",
      data: updateData
    })
  }

});



