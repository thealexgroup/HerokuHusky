$(document).ready(function() {


$( "#familyTree1a" ).hide();
$( "#familyTree1b" ).hide();

//holds the final genotype for puppy
var newE = ""; 
//holds initial_Parent info
var parent = {};
//holds first_Mate info
var mate1 = {};
//hold studentinfo
var studentInfo = {};
//hold first time diff
var totalTimeDiff1

function getCurrentTime() {

		  	var newD = new Date();

		  	var year = newD.getFullYear();
		  	
		    var month = (newD.getMonth() + 1);
		  	if (month < 10 ) { month = ("0" + month);}
		    
		    var day = newD.getDate();
		    if (day < 10 ) {day = ("0" + day);}
		  	
		    var hour = (newD.getHours());
		    if (hour < 10 ) {hour = ("0" + hour);}
		  	
		    var minute = newD.getMinutes();
		    if (minute < 10 ) {minute = ("0" + minute);}
		  	
		    var second = newD.getSeconds();
		    if (second < 10 ) {second = ("0" + second);}

		    currentTime = (year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second);
		    getStudent(currentTime);

}

getCurrentTime();


function getStudent() {
	$.get("/student/find/", function(newdata) {
		studentInfo = newdata;
		console.log(studentInfo);

		if (studentInfo.first_createdAt) {
		var date1 = newdata.first_createdAt.slice(0, 19).replace('T', ' ');
//		studentData += newdata;
		console.log(date1);
		getTimeDiff(currentTime, date1);
	} else 
	displayDivs();
	})
}

function getTimeDiff(date1, currentTime) {
        old_date = date1;
        new_date = currentTime;

        old_date_obj = new Date(Date.parse(old_date, "dd/mm/yyyy HH:mm:ss"));
        console.log("DATE 1 " + old_date_obj);
        new_date_obj = new Date(Date.parse(new_date, "dd/mm/yyyy HH:mm:ss"));
        console.log("DATE 2 " + new_date_obj);        

        var utc1 = Date.UTC(new_date_obj.getFullYear(), new_date_obj.getMonth(), new_date_obj.getDate(), new_date_obj.getHours());
        console.log("UTC1 " + utc1);
        var utc2 = Date.UTC(old_date_obj.getFullYear(), old_date_obj.getMonth(), old_date_obj.getDate(), old_date_obj.getHours());
        console.log("UTC2 " + utc2);        
        totalTimeDiff1 = (Math.floor((utc2 - utc1) / (1000 * 60 * 60) + 6));
        console.log(totalTimeDiff1);
        displayDivs();
}


function displayDivs() {
	if (!studentInfo.first_createdAt) {
			$("#familyTree1a").show();
		}
	if (totalTimeDiff1 > 0) {
			$("#familyTree1b").show();
			$("#holdfirst1a").html("<img src=assets/img/" + studentInfo.initial_Parent + ".jpg>");			
			$("#holdsecond1a").html("<img src=assets/img/" + studentInfo.first_Mate + ".jpg>");		
		}
}

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

		var timestamp = "";

		  	var d = new Date();

		  	var year = d.getFullYear();
		  	
		    var month = (d.getMonth() + 1);
		  	if (month < 10 ) { month = ("0" + month);}
		    
		    var day = d.getDate();
		    if (day < 10 ) {day = ("0" + day);}
		  	
		    var hour = d.getHours();
		    if (hour < 10 ) {hour = ("0" + hour);}
		  	
		    var minute = d.getMinutes();
		    if (minute < 10 ) {minute = ("0" + minute);}
		  	
		    var second = d.getSeconds();
		    if (second < 10 ) {second = ("0" + second);}

		    timestamp = (year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second);


		var updateData = {
		initial_Parent: parent.id,
		first_Mate: mate1.id,
      	first_Offspring: data.id,
      	first_Genotype: data.genoType,
      	first_HuskyImage: data.huskyImage,
      	first_createdAt: timestamp
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



