$(document).ready(function() {

/*
    	These are the divs that hold the information on the student screen 
		a holds the initial input for mate
		b holds the wait message
		c holds the see puppy message
		Hide them all intially
*/

$( "#familyTree1a" ).hide();
$( "#familyTree1b" ).hide();
$( "#familyTree1c" ).hide();
$( "#familyTree2a" ).hide();
$( "#familyTree2b" ).hide();
$( "#familyTree2c" ).hide();


//holds the final genotype for puppy
var newE = ""; 
var newE2 = ""; 

//holds parent info
var parent = {};
var parent2 = {};

//holds first_Mate info
var mate1 = {};
var mate2 = {};

//hold studentinfo
var studentInfo = {};

//	get current time to use in all of the display pieces. this will determine what, if anything, will be 
//  displayed for each puppy

function getCurrentTime() {

			//get new date
		  	var newD = new Date();

		  	//parse out the new date in the format I want
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

		    //write the current time and pass it along
		    currentTime = (year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second);
		    //get the student info, do time calculations
		    getStudent(currentTime);

}

//invoke this function and when done, invoke getStudent function
getCurrentTime();


//get the entire student object from the database.  Probably not a great thing but put it in a global variable
function getStudent(currentTime) {
	$.get("/student/find/", function(newdata) {
		studentInfo = newdata;
		if (studentInfo.first_createdAt) { 									
		var date1 = newdata.first_createdAt.slice(0, 19).replace('T', ' ');
		console.log(date1);
		getTimeDiff1(date1, currentTime);
	} else 
	displayFirstDivs(currentTime);
	})
}

//if I had to do this over again, I would write this to the database and not calculated it every time.
//but I'll end up getting the time differential every time.
function getTimeDiff1(date1, currentTime) {
        old_date = date1;
        new_date = currentTime;
        console.log("New Date? " + new_date);

        old_date_obj = new Date(Date.parse(old_date, "dd/mm/yyyy HH:mm:ss"));
        console.log("DATE 1 " + old_date_obj);
        new_date_obj = new Date(Date.parse(new_date, "dd/mm/yyyy HH:mm:ss"));
        console.log("DATE 2 " + new_date_obj);        

        var utc1 = Date.UTC(new_date_obj.getFullYear(), new_date_obj.getMonth(), new_date_obj.getDate(), new_date_obj.getHours());
        console.log("UTC1 " + utc1);
        var utc2 = Date.UTC(old_date_obj.getFullYear(), old_date_obj.getMonth(), old_date_obj.getDate(), old_date_obj.getHours());
        console.log("UTC2 " + utc1);        
        totalTimeDiff1 = (Math.floor((utc1 - utc2) / (1000 * 60 * 60) + 8));
        displayFirstDivs(currentTime, totalTimeDiff1);
}


function displayFirstDivs(currentTime, totalTimeDiff1) {
	console.log("First time difference " + totalTimeDiff1)
	if (!studentInfo.first_createdAt) {
			$("#familyTree1a").show();
		}
	if (studentInfo.first_createdAt && totalTimeDiff1 < 2) { //TSA CHANGE THIS TO 18 FOR LIVE
			$("#familyTree1b").show();
			$("#holdfirst1b").html("<img src=assets/img/" + studentInfo.initial_Parent + ".jpg>");			
			$("#holdsecond1b").html("<img src=assets/img/" + studentInfo.first_Mate + ".jpg>");		
		}
	if (studentInfo.first_createdAt && totalTimeDiff1 > 1) { //TSA CHANGE THIS TO 17 FOR LIVE
			$("#familyTree1c").show();
			$("#holdfirst1c").html("<img src=assets/img/" + studentInfo.initial_Parent + ".jpg>");			
			$("#holdsecond1c").html("<img src=assets/img/" + studentInfo.first_Mate + ".jpg>");		
		}		
		getTimeDiff2(currentTime, totalTimeDiff1);
}

function getTimeDiff2(currentTime, totalTimeDiff1) {
		if (studentInfo.second_createdAt) {
        old_date = studentInfo.second_createdAt.slice(0, 19).replace('T', ' ');
    } else {
    	old_date = currentTime;
    }
        new_date = currentTime;

        old_date_obj = new Date(Date.parse(old_date, "dd/mm/yyyy HH:mm:ss"));
//        console.log("DATE 1 " + old_date_obj);
        new_date_obj = new Date(Date.parse(new_date, "dd/mm/yyyy HH:mm:ss"));
//        console.log("DATE 2 " + new_date_obj);        

        var utc1 = Date.UTC(new_date_obj.getFullYear(), new_date_obj.getMonth(), new_date_obj.getDate(), new_date_obj.getHours());
//        console.log("UTC1 " + utc1);
        var utc2 = Date.UTC(old_date_obj.getFullYear(), old_date_obj.getMonth(), old_date_obj.getDate(), old_date_obj.getHours());
        totalTimeDiff2 = (Math.floor((utc1 - utc2) / (1000 * 60 * 60)));
        console.log("Second time difference " + totalTimeDiff2)
        displaySecondDivs(currentTime, totalTimeDiff1, totalTimeDiff2);
}

function displaySecondDivs(currentTime, totalTimeDiff1, totalTimeDiff2) {
	if (!studentInfo.second_createdAt && totalTimeDiff1 > 1) { //TSA CHANGE THIS TO 17 FOR LIVE
			$("#familyTree2a").show();
			$("#holdfirst2a").html("<img src=assets/img/" + studentInfo.first_HuskyImage + ">");						
		}
	if (studentInfo.second_createdAt && totalTimeDiff2 < 2) {//TSA CHANGE THIS TO 18 FOR LIVE
			$("#familyTree2b").show();
			$("#holdfirst2b").html("<img src=assets/img/" + studentInfo.first_HuskyImage + ">");			
			$("#holdsecond2b").html("<img src=assets/img/" + studentInfo.second_Mate + ".jpg>");		
		}
	if (studentInfo.second_createdAt && totalTimeDiff2 > 1) {//TSA CHANGE THIS TO 17 FOR LIVE
			$("#familyTree2c").show();
			$("#holdfirst2c").html("<img src=assets/img/" + studentInfo.first_HuskyImage + ".jpg>");			
			$("#holdsecond2c").html("<img src=assets/img/" + studentInfo.second_Mate + ".jpg>");		
		}		
//		displaySecondDivs(currentTime);
}

// get first parent and mate information

$("#submit1").on("click", function(event) {

	    event.preventDefault();
	    var iniParent = $('input[name="initial_Parent"]').val();
//	    console.log(iniParent);
	    var fMate =  $('input[name="first_Mate"]').val();
//	    console.log(fMate);
	    checkValues(iniParent, fMate);
});


function checkValues(iniParent, fMate) {
	if ((iniParent > 81 && fMate > 81) || (iniParent < 82 && fMate < 82)  ||  (!fMate) || (!iniParent) ||
		 (iniParent > 162)  || (iniParent < 1)  || (fMate > 162)  || (fMate < 1)
		) {
		$("#myModal").modal();
	} else {
		removeSubmit(iniParent, fMate);
	}
}


function removeSubmit(iniParent, fMate) {
	$("#submit1").css("display", "none");
	$("#show1").css("display", "inline");
	searchFirstDog(iniParent, fMate);
}

function searchFirstDog(iniParent, fMate) {
	$.get("/student/get/" + iniParent, function(data1) {
		console.log("Husky 1 " + data1.huskyImage);
		$("#holdfirst1a").html("<img src=assets/img/" + data1.huskyImage + ">");
		parent = data1;
		searchSecondDog(iniParent, fMate, data1)
	})
}

function searchSecondDog(iniParent, fMate, data1) {
	$.get("/student/get/" + fMate, function(data2) {
		console.log("Husky 2 " + data2.huskyImage);		
		$("#holdsecond1a").html("<img src=assets/img/" + data2.huskyImage + ">");		
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

// get first parent and mate information

$("#submit2").on("click", function(event) {

	    event.preventDefault();
	    var first_Offspring = studentInfo.first_Offspring;
//	    console.log(iniParent);
	    var second_Mate =  $('input[name="second_Mate"]').val();
//	    console.log(fMate);
	    checkValues2(first_Offspring, second_Mate);
});


function checkValues2(first_Offspring, second_Mate) {
	if ((first_Offspring > 81 && second_Mate > 81) || (first_Offspring < 82 && second_Mate < 82) || 
		(!second_Mate) || (!first_Offspring) || (first_Offspring < 1)  || (first_Offspring > 162) || (second_Mate < 1)  || (second_Mate > 162)) {
		$("#myModal").modal();
	} else {
		removeSubmit2(first_Offspring, second_Mate);
	}
}

function removeSubmit2(first_Offspring, second_Mate) {
	$("#submit2").css("display", "none");
	$("#show2").css("display", "inline");
	searchDog2a(first_Offspring, second_Mate);
}


function searchDog2a(first_Offspring, second_Mate) {
	$.get("/student/get/" + first_Offspring, function(data2a) {
//		$("#holdfirst1a").html("<img src=assets/img/" + data1.huskyImage + ">");
		parent2 = data2a;
		searchDog2b(first_Offspring, second_Mate, data2a)
	})
}

function searchDog2b(first_Offspring, second_Mate, data2a) {
	$.get("/student/get/" + second_Mate, function(data2b) {
		console.log("Husky 2b " + data2b.huskyImage);		
		$("#holdsecond2a").html("<img src=assets/img/" + data2b.huskyImage + ">");		
		parent2 = data2a;
		mate2 = data2a;
		pickAllele1a();
	})
}

//randomly choose between one or the other allele for eye color
function pickAllele1a() {

	var e1 = parent2.eyeColorOne;
	var e2 = parent2.eyeColorTwo;
	var e3 = mate2.eyeColorOne;
	var e4 = mate2.eyeColorTwo;
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
		newE2 += (hold2 + hold1);
	} else {
		newE2 += (hold1 + hold2);		
	}
	pickAllele2a();
};

function pickAllele2a() {

	var e1 = parent2.coatColorOne;
	var e2 = parent2.coatColorTwo;
	var e3 = mate2.coatColorOne;
	var e4 = mate2.coatColorTwo;
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
		newE2 += (hold2 + hold1);
	} else {
		newE2 += (hold1 + hold2);		
	}
//	console.log("2 " + newE);
	pickAllele3a();
};

function pickAllele3a() {

	var e1 = parent2.tailLengthOne;
	var e2 = parent2.tailLengthTwo;
	var e3 = mate2.tailLengthOne;
	var e4 = mate2.tailLengthTwo;
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
		newE2 += (hold2 + hold1);
	} else {
		newE2 += (hold1 + hold2);		
	}
//	console.log("3" + newE);
	pickAllele4a();
};

function pickAllele4a() {

	var e1 = parent2.tongueOne;
	var e2 = parent2.tongueTwo;
	var e3 = mate2.tongueOne;
	var e4 = mate2.tongueTwo;
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
		newE2 += (hold2 + hold1);
	} else {
		newE2 += (hold1 + hold2);		
	}
//	console.log("4 " + newE);
	pickAllele5a();
};

function pickAllele5a() {

	var e1 = parent2.sexOne;
	var e2 = parent2.sexTwo;
	var e3 = mate2.sexOne;
	var e4 = mate2.sexTwo;
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
		newE2 += (hold2 + hold1);
	} else {
		newE2 += (hold1 + hold2);		
	}
//	console.log("5 " + newE);
	searchForPuppy2();
};

function searchForPuppy2() {
	$.get("/student/puppy1/" + newE2, function(data2c) {

		var timestamp2 = "";

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

		    timestamp2 = (year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second);


		var updateData2 = {
		second_Mate: mate2.id,
      	second_Offspring: data2c.id,
      	second_Genotype: data2c.genoType,
      	second_HuskyImage: data2c.huskyImage,
      	second_createdAt: timestamp2
		}
		$("#secondpuppy").html("<br>Your second puppy: <br><img src=assets/img/" + data2c.huskyImage + ">");
		updateStudent(updateData2);
	})
}

function updateStudent(updateData2) {
    $.ajax({
      method: "PUT",
      url: "/student/update2",
      data: updateData2
    })
  }

});



