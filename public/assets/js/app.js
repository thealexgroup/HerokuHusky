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
$( "#familyTree3a" ).hide();
$( "#familyTree3b" ).hide();
$( "#familyTree3c" ).hide();
$( "#familyTree4a" ).hide();
$( "#familyTree4b" ).hide();
$( "#familyTree4c" ).hide();
$( "#familyTree5a" ).hide();
$( "#familyTree5b" ).hide();
$( "#familyTree5c" ).hide();
$( "#familyTree6a" ).hide();
$( "#familyTree6b" ).hide();
$( "#familyTree6c" ).hide();
$( "#familyTree7a" ).hide();
$( "#familyTree7b" ).hide();
$( "#familyTree7c" ).hide();
$( "#familyTree8a" ).hide();
$( "#familyTree8b" ).hide();
$( "#familyTree8c" ).hide();

//global variables aren't great, but at the time wasn't sure how else to write this.
//a lot of things we would have done differently, but we had to get the app working 
//live for Blue Valley Northwest for their genetics unit.  

//holds the final genotype for each puppy
var newE = ""; 
var newE2 = ""; 
var newE3 = ""; 
var newE4 = ""; 
var newE5 = ""; 
var newE6 = ""; 
var newE7 = ""; 
var newE8 = ""; 

//holds each parent info
var parent = {};
var parent2 = {};
var parent3 = {};
var parent4 = {};
var parent5 = {};
var parent6 = {};
var parent7 = {};
var parent8 = {};

//holds each Mate info
var mate1 = {};
var mate2 = {};
var mate3 = {};
var mate4 = {};
var mate5 = {};
var mate6 = {};
var mate7 = {};
var mate8 = {};

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
 
    //when done, invoke getStudent function and pass currentTime
    getStudent(currentTime);

}

//invoke function
getCurrentTime();


//get the entire student object from the database.  Probably not a great thing but put it in a global variable
function getStudent(currentTime) {

      //this is the route to get student data, pass to newdata
      $.get("/student/find/", function(newdata) {

      //again, pass the callback information to global variable.
      studentInfo = newdata;

      //if already created first puppy, splice to first time.  We probably should have used moment.js
      if (studentInfo.first_createdAt) {

          //slice first 20 characters, replace the T with a blank in the date string
          var date1 = newdata.first_createdAt.slice(0, 19).replace('T', ' ');
          getTimeDiff1(date1, currentTime);

      } else 

      //otherwise, just display the first div given that nothing has been created yet.
      displayFirstDivs(currentTime);
  })

};

//if we had to do this over again, we would write this to the database and not calculate it every time.
//We'll end up getting the time differential every time for every instance

//two arguments, date1 and currentTime from getCurrentTime function
function getTimeDiff1(date1, currentTime) {

    //We used an example to get here, we could have use date1 and current time instead of writing them to new variables
    old_date = date1;
    new_date = currentTime;

    //date parse both new objects.
    old_date_obj = new Date(Date.parse(old_date, "dd/mm/yyyy HH:mm:ss"));
    new_date_obj = new Date(Date.parse(new_date, "dd/mm/yyyy HH:mm:ss"));

    //get the exact information out of each date string to get the time difference YYYY MM DD HH
    var utc1 = Date.UTC(new_date_obj.getFullYear(), new_date_obj.getMonth(), new_date_obj.getDate(), new_date_obj.getHours());
    var utc2 = Date.UTC(old_date_obj.getFullYear(), old_date_obj.getMonth(), old_date_obj.getDate(), old_date_obj.getHours());

    //write the current time and time from when the first puppy was created to this variable
    totalTimeDiff1 = (Math.floor((utc1 - utc2) / (1000 * 60 * 60) + 8));

    //invoke displayFirstDivs, passing both currentTime and totalTimeDiff1 for calcs
    displayFirstDivs(currentTime, totalTimeDiff1);
}


//BNNW teachers wanted puppy information to only display after 18 hours.  This function can display up to 
//three divs in the student.handlebars file depending on when the first puppy was created and what the current
//time is now
function displayFirstDivs(currentTime, totalTimeDiff1) {

    //if no puppy has been created at yet, show div with ID familyTree1a.  This will ask for both initial
    //parent and first mate
    if (!studentInfo.first_createdAt) {
        $("#familyTree1a").show();
    }

    //if there is a created at time, but it's less than 18 hours old, then show this div which only
    //shows the parent images and a YOU MUST WAIT message
    if (studentInfo.first_createdAt && totalTimeDiff1 < 2) { //TSA CHANGE THIS TO 18 FOR LIVE
        $("#familyTree1b").show();
        $("#holdfirst1b").html("<img src=assets/img/" + studentInfo.initial_Parent + ".jpg>");			
        $("#holdsecond1b").html("<img src=assets/img/" + studentInfo.first_Mate + ".jpg>");		 
    }

    //if first puppy was create longer than 17 hours ago, show both parent images and the 
    //SEE YOUR PUPPY BELOW message.  The next div for input will be shown as well.
    if (studentInfo.first_createdAt && totalTimeDiff1 > 1) { //TSA CHANGE THIS TO 17 FOR LIVE
        $("#familyTree1c").show();
        $("#holdfirst1c").html("<img src=assets/img/" + studentInfo.initial_Parent + ".jpg>");			
        $("#holdsecond1c").html("<img src=assets/img/" + studentInfo.first_Mate + ".jpg>");		
    }		

        //get the second time differential, passing these two times to it for use in displays.  
        getTimeDiff2(currentTime, totalTimeDiff1);
}

//from this line (191) to line XXX are repeats of the last two functions.  Again, hindsight, we would
//have put this in to a constructor, and written each to the student data.  

function getTimeDiff2(currentTime, totalTimeDiff1) {

    if (studentInfo.second_createdAt) {
        old_date = studentInfo.second_createdAt.slice(0, 19).replace('T', ' ');

    } else {

        old_date = currentTime;
    }
        new_date = currentTime;

    old_date_obj = new Date(Date.parse(old_date, "dd/mm/yyyy HH:mm:ss"));
    new_date_obj = new Date(Date.parse(new_date, "dd/mm/yyyy HH:mm:ss"));

    var utc1 = Date.UTC(new_date_obj.getFullYear(), new_date_obj.getMonth(), new_date_obj.getDate(), new_date_obj.getHours());
    var utc2 = Date.UTC(old_date_obj.getFullYear(), old_date_obj.getMonth(), old_date_obj.getDate(), old_date_obj.getHours());

    totalTimeDiff2 = (Math.floor((utc1 - utc2) / (1000 * 60 * 60) + 8));

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
        $("#holdfirst2c").html("<img src=assets/img/" + studentInfo.first_HuskyImage + ">");			
        $("#holdsecond2c").html("<img src=assets/img/" + studentInfo.second_Mate + ".jpg>");		
    }		

    getTimeDiff3(currentTime, totalTimeDiff2);
}

//number 3
function getTimeDiff3(currentTime, totalTimeDiff2) {

    if (studentInfo.third_createdAt) {
        old_date = studentInfo.third_createdAt.slice(0, 19).replace('T', ' ');
    } else {

        old_date = currentTime;
    }

    new_date = currentTime;

    old_date_obj = new Date(Date.parse(old_date, "dd/mm/yyyy HH:mm:ss"));
    new_date_obj = new Date(Date.parse(new_date, "dd/mm/yyyy HH:mm:ss"));

    var utc1 = Date.UTC(new_date_obj.getFullYear(), new_date_obj.getMonth(), new_date_obj.getDate(), new_date_obj.getHours());
    var utc2 = Date.UTC(old_date_obj.getFullYear(), old_date_obj.getMonth(), old_date_obj.getDate(), old_date_obj.getHours());

    totalTimeDiff3 = (Math.floor((utc1 - utc2) / (1000 * 60 * 60) + 8));
 
    displayThirdDivs(currentTime, totalTimeDiff2, totalTimeDiff3);
}

function displayThirdDivs(currentTime, totalTimeDiff2, totalTimeDiff3) {

    if (!studentInfo.third_createdAt && totalTimeDiff2 > 1) { //TSA CHANGE THIS TO 17 FOR LIVE
        $("#familyTree3a").show();
        $("#holdfirst3a").html("<img src=assets/img/" + studentInfo.second_HuskyImage + ">");						
    }

    if (studentInfo.third_createdAt && totalTimeDiff3 < 2) {//TSA CHANGE THIS TO 18 FOR LIVE
        $("#familyTree3b").show();
        $("#holdfirst3b").html("<img src=assets/img/" + studentInfo.second_HuskyImage + ">");			
        $("#holdsecond3b").html("<img src=assets/img/" + studentInfo.third_Mate + ".jpg>");		
    }

    if (studentInfo.third_createdAt && totalTimeDiff3 > 1) {//TSA CHANGE THIS TO 17 FOR LIVE
        $("#familyTree3c").show();
        $("#holdfirst3c").html("<img src=assets/img/" + studentInfo.second_HuskyImage + ">");			
        $("#holdsecond3c").html("<img src=assets/img/" + studentInfo.third_Mate + ".jpg>");		
    }		

    getTimeDiff4(currentTime, totalTimeDiff3);
}

//number 4
function getTimeDiff4(currentTime, totalTimeDiff3) {

		if (studentInfo.fourth_createdAt) {
        old_date = studentInfo.fourth_createdAt.slice(0, 19).replace('T', ' ');
    } else {
    	old_date = currentTime;
    }

    new_date = currentTime;

    old_date_obj = new Date(Date.parse(old_date, "dd/mm/yyyy HH:mm:ss"));
    new_date_obj = new Date(Date.parse(new_date, "dd/mm/yyyy HH:mm:ss"));

    var utc1 = Date.UTC(new_date_obj.getFullYear(), new_date_obj.getMonth(), new_date_obj.getDate(), new_date_obj.getHours());
    var utc2 = Date.UTC(old_date_obj.getFullYear(), old_date_obj.getMonth(), old_date_obj.getDate(), old_date_obj.getHours());

    totalTimeDiff4 = (Math.floor((utc1 - utc2) / (1000 * 60 * 60) + 8));

    displayFourthDivs(currentTime, totalTimeDiff3, totalTimeDiff4);
}

function displayFourthDivs(currentTime, totalTimeDiff3, totalTimeDiff4) {

    if (!studentInfo.fourth_createdAt && totalTimeDiff3 > 1) { //TSA CHANGE THIS TO 17 FOR LIVE
        $("#familyTree4a").show();
        $("#holdfirst4a").html("<img src=assets/img/" + studentInfo.third_HuskyImage + ">");						
    }

    if (studentInfo.fourth_createdAt && totalTimeDiff4 < 2) {//TSA CHANGE THIS TO 18 FOR LIVE
       $("#familyTree4b").show();
       $("#holdfirst4b").html("<img src=assets/img/" + studentInfo.third_HuskyImage + ">");			
       $("#holdsecond4b").html("<img src=assets/img/" + studentInfo.fourth_Mate + ".jpg>");		
    }

    if (studentInfo.fourth_createdAt && totalTimeDiff4 > 1) {//TSA CHANGE THIS TO 17 FOR LIVE
        $("#familyTree4c").show();
        $("#holdfirst4c").html("<img src=assets/img/" + studentInfo.third_HuskyImage + ">");			
        $("#holdsecond4c").html("<img src=assets/img/" + studentInfo.fourth_Mate + ".jpg>");		
    }		

    getTimeDiff5(currentTime, totalTimeDiff4);
}

function getTimeDiff5(currentTime, totalTimeDiff4) {

    if (studentInfo.fifth_createdAt) {
        old_date = studentInfo.fifth_createdAt.slice(0, 19).replace('T', ' ');
    } else {

        old_date = currentTime;
    }

    new_date = currentTime;

    old_date_obj = new Date(Date.parse(old_date, "dd/mm/yyyy HH:mm:ss"));
    new_date_obj = new Date(Date.parse(new_date, "dd/mm/yyyy HH:mm:ss"));

    var utc1 = Date.UTC(new_date_obj.getFullYear(), new_date_obj.getMonth(), new_date_obj.getDate(), new_date_obj.getHours());
    var utc2 = Date.UTC(old_date_obj.getFullYear(), old_date_obj.getMonth(), old_date_obj.getDate(), old_date_obj.getHours());

    totalTimeDiff5 = (Math.floor((utc1 - utc2) / (1000 * 60 * 60) + 8));

    displayFifthDivs(currentTime, totalTimeDiff4, totalTimeDiff5);
}

function displayFifthDivs(currentTime, totalTimeDiff4, totalTimeDiff5) {

    if (!studentInfo.fifth_createdAt && totalTimeDiff4 > 1) { //TSA CHANGE THIS TO 17 FOR LIVE
        $("#familyTree5a").show();
        $("#holdfirst5a").html("<img src=assets/img/" + studentInfo.fourth_HuskyImage + ">");						
    }

    if (studentInfo.fifth_createdAt && totalTimeDiff5 < 2) {//TSA CHANGE THIS TO 18 FOR LIVE
        $("#familyTree5b").show();
        $("#holdfirst5b").html("<img src=assets/img/" + studentInfo.fourth_HuskyImage + ">");			
        $("#holdsecond5b").html("<img src=assets/img/" + studentInfo.fifth_Mate + ".jpg>");		
    }

    if (studentInfo.fifth_createdAt && totalTimeDiff5 > 1) {//TSA CHANGE THIS TO 17 FOR LIVE
        $("#familyTree5c").show();
        $("#holdfirst5c").html("<img src=assets/img/" + studentInfo.fourth_HuskyImage + ">");			
        $("#holdsecond5c").html("<img src=assets/img/" + studentInfo.fifth_Mate + ".jpg>");		
    }		

    getTimeDiff6(currentTime, totalTimeDiff5);
}

function getTimeDiff6(currentTime, totalTimeDiff5) {

    if (studentInfo.sixth_createdAt) {
        old_date = studentInfo.sixth_createdAt.slice(0, 19).replace('T', ' ');
    } else {

        old_date = currentTime;
    }

    new_date = currentTime;

    old_date_obj = new Date(Date.parse(old_date, "dd/mm/yyyy HH:mm:ss"));
    new_date_obj = new Date(Date.parse(new_date, "dd/mm/yyyy HH:mm:ss"));

    var utc1 = Date.UTC(new_date_obj.getFullYear(), new_date_obj.getMonth(), new_date_obj.getDate(), new_date_obj.getHours());
    var utc2 = Date.UTC(old_date_obj.getFullYear(), old_date_obj.getMonth(), old_date_obj.getDate(), old_date_obj.getHours());

    totalTimeDiff6 = (Math.floor((utc1 - utc2) / (1000 * 60 * 60)));

    displaySixthDivs(currentTime, totalTimeDiff5, totalTimeDiff6);
}

function displaySixthDivs(currentTime, totalTimeDiff5, totalTimeDiff6) {

    if (!studentInfo.sixth_createdAt && totalTimeDiff5 > 1) { //TSA CHANGE THIS TO 17 FOR LIVE
        $("#familyTree6a").show();
        $("#holdfirst6a").html("<img src=assets/img/" + studentInfo.fifth_HuskyImage + ">");						
    }

    if (studentInfo.sixth_createdAt && totalTimeDiff6 < 2) {//TSA CHANGE THIS TO 18 FOR LIVE
        $("#familyTree6b").show();
        $("#holdfirst6b").html("<img src=assets/img/" + studentInfo.fifth_HuskyImage + ">");			
        $("#holdsecond6b").html("<img src=assets/img/" + studentInfo.sixth_Mate + ".jpg>");		
    }

    if (studentInfo.sixth_createdAt && totalTimeDiff6 > 1) {//TSA CHANGE THIS TO 17 FOR LIVE
        $("#familyTree6c").show();
        $("#holdfirst6c").html("<img src=assets/img/" + studentInfo.fifth_HuskyImage + ">");			
        $("#holdsecond6c").html("<img src=assets/img/" + studentInfo.sixth_Mate + ".jpg>");		
    }

    getTimeDiff7(currentTime, totalTimeDiff6);
}

function getTimeDiff7(currentTime, totalTimeDiff6) {

    if (studentInfo.seventh_createdAt) {
        old_date = studentInfo.seventh_createdAt.slice(0, 19).replace('T', ' ');
    } else {

        old_date = currentTime;
    }

    new_date = currentTime;

    old_date_obj = new Date(Date.parse(old_date, "dd/mm/yyyy HH:mm:ss"));
    new_date_obj = new Date(Date.parse(new_date, "dd/mm/yyyy HH:mm:ss"));

    var utc1 = Date.UTC(new_date_obj.getFullYear(), new_date_obj.getMonth(), new_date_obj.getDate(), new_date_obj.getHours());
    var utc2 = Date.UTC(old_date_obj.getFullYear(), old_date_obj.getMonth(), old_date_obj.getDate(), old_date_obj.getHours());

    totalTimeDiff7 = (Math.floor((utc1 - utc2) / (1000 * 60 * 60) + 8));

    displaySeventhDivs(currentTime, totalTimeDiff6, totalTimeDiff7);
}

function displaySeventhDivs(currentTime, totalTimeDiff6, totalTimeDiff7) {

    if (!studentInfo.seventh_createdAt && totalTimeDiff6 > 1) { //TSA CHANGE THIS TO 17 FOR LIVE
        $("#familyTree7a").show();
        $("#holdfirst7a").html("<img src=assets/img/" + studentInfo.sixth_HuskyImage + ">");                        
    }

    if (studentInfo.seventh_createdAt && totalTimeDiff7 < 2) {//TSA CHANGE THIS TO 18 FOR LIVE
        $("#familyTree7b").show();
        $("#holdfirst7b").html("<img src=assets/img/" + studentInfo.sixth_HuskyImage + ">");            
        $("#holdsecond7b").html("<img src=assets/img/" + studentInfo.seventh_Mate + ".jpg>");       
    }

    if (studentInfo.seventh_createdAt && totalTimeDiff7 > 1) {//TSA CHANGE THIS TO 17 FOR LIVE
        $("#familyTree7c").show();
        $("#holdfirst7c").html("<img src=assets/img/" + studentInfo.sixth_HuskyImage + ">");            
        $("#holdsecond7c").html("<img src=assets/img/" + studentInfo.seventh_Mate + ".jpg>");       
    }

//    getTimeDiff8(currentTime, totalTimeDiff7);
}


//This section is for taking initial input from student.handlebars, looking up the genetic code
//for both parent, selecting a genetic code for offspring, and writing the information to the student database

//on sumbit for id submit1
$("#submit1").on("click", function(event) {

    event.preventDefault();

    //grab initial parent id
    var iniParent = $('input[name="initial_Parent"]').val();

    //grab first mate
    var fMate =  $('input[name="first_Mate"]').val();

    //invoke checkValues to make sure values are good, passing input to function
    checkValues(iniParent, fMate);

});


//this function ensures that both entries are between 1 and 162, nothing is blank, and both are not males and both
//are not females.

function checkValues(iniParent, fMate) {

    //if any checks fail
    if ((iniParent > 81 && fMate > 81) || (iniParent < 82 && fMate < 82)  ||  (!fMate) || (!iniParent) ||
        (iniParent > 162)  || (iniParent < 1)  || (fMate > 162)  || (fMate < 1)) {

        //display modal with error messages
        $("#myModal").modal();

    } else {

        //otherwise invoke removeSubmit function, keep passing these values
        removeSubmit(iniParent, fMate);
    }
};


//remove the submit button from div, display wait message

function removeSubmit(iniParent, fMate) {

    //hide submit one id
    $("#submit1").css("display", "none");
    //display show1 id
    $("#show1").css("display", "inline");

    //invoke first search passing these values
    searchFirstDog(iniParent, fMate);
}


//search the dogs table for first parent
function searchFirstDog(iniParent, fMate) {

    //this is my route, using initial parent ID, passing to data1 
    $.get("/student/get/" + iniParent, function(data1) {

        //display the image for what is found on screen
        $("#holdfirst1a").html("<img src=assets/img/" + data1.huskyImage + ">");

        //write initial parent data to global variable
        parent = data1;

        //invoke search for second dog input, again passing values
        searchSecondDog(iniParent, fMate, data1)
	})
};

//search the dogs table for the second parent
function searchSecondDog(iniParent, fMate, data1) {

    //again use the same route as above, but get first mate information instead of intial parent
    $.get("/student/get/" + fMate, function(data2) {

        //display that mate's image on screen
        $("#holdsecond1a").html("<img src=assets/img/" + data2.huskyImage + ">");		

        //write mate information to global variable
        mate1 = data2;

        //invoke picking of new genetic strings.
        pickAllele1();
    })
};

//randomly choose between one or the other allele for eye color
function pickAllele1() {

    //these hold the individual genetic code for each eye color, both parent and mate
    var e1 = parent.eyeColorOne;
    var e2 = parent.eyeColorTwo;
    var e3 = mate1.eyeColorOne;
    var e4 = mate1.eyeColorTwo;

    //these will hold the final selection for eye color one and two
    var hold1 = "";
    var hold2 = "";	

    //randomly choose between e1 and e2, write it to hold 1
    var choose1 = Math.random();

    if (choose1 < 0.5) {
        hold1 = e1;
    } else {
        hold1 = e2;
    }

    //random choose between e3 and e4
    var choose2 = Math.random();

    if (choose2 < 0.5) {
        hold2 = e3;
    } else {
        hold2 = e4;
    }

    //in genetics, the uppercase letter would always come first in the string.  this section compares 
    //order and writes the correct order to the new string (newE)
    if ((hold1.charAt(0) === hold1.charAt(0).toLowerCase()) && (hold2.charAt(0) === hold2.charAt(0).toUpperCase())) {

        //write in reverse order if hold2 is upper and hold1 is lower
            newE += (hold2 + hold1);
        } else {
            //else write in order chosen
            newE += (hold1 + hold2);		
        }

    //invoke next allele picking function
    pickAllele2();
};

//for each allele function the process is the same as above.  Again, this should have been done as a constuctor.

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

    var choose2 = Math.random();

    if (choose2 < 0.5) {
        hold2 = e3;
    } else {
        hold2 = e4;
    }

    if ((hold1.charAt(0) === "W") && (hold2.charAt(0) === "G")) {
        newE += (hold2 + hold1);
    } else {
        newE += (hold1 + hold2);		
    }

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
	console.log("5 " + newE);
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
	console.log(updateData)
    $.ajax({
      method: "PUT",
      url: "/student/update",
      data: updateData
    })
  }

// get second parent and mate information

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
//		parent2 = data2a;
		searchDog2b(first_Offspring, second_Mate, data2a)
	})
}

function searchDog2b(first_Offspring, second_Mate, data2a) {
	$.get("/student/get/" + second_Mate, function(data2b) {
		console.log("Husky 2b " + data2b.huskyImage);		
		$("#holdsecond2a").html("<img src=assets/img/" + data2b.huskyImage + ">");		
		parent2 = data2a;
		mate2 = data2b;
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

console.log(parent2);
console.log(mate2);

	var e1 = parent2.coatColorOne;
	var e2 = parent2.coatColorTwo;
	var e3 = mate2.coatColorOne;
	console.log("E3 " + e3);
	var e4 = mate2.coatColorTwo;
	console.log("E4 " + e4);		
	var hold1 = "";
	var hold2 = "";	

	var choose1 = Math.random();
	if (choose1 < 0.5) {
		hold1 = e1;
	} else {
		hold1 = e2;
	}
	console.log("one " + hold1);

	var choose2 = Math.random();
	if (choose2 < 0.5) {
		hold2 = e3;
	} else {
		hold2 = e4;
	}
	console.log("two " + hold2);	
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
		updateStudent2(updateData2);
	})
}

function updateStudent2(updateData2) {
    $.ajax({
      method: "PUT",
      url: "/student/update2",
      data: updateData2
    })
  }

// get third parent and mate information

$("#submit3").on("click", function(event) { //change submit

	    event.preventDefault();
	    var second_Offspring = studentInfo.second_Offspring;
	    var third_Mate =  $('input[name="third_Mate"]').val();
	    checkValues3(second_Offspring, third_Mate);
});


function checkValues3(second_Offspring, third_Mate) {
	if ((second_Offspring > 81 && third_Mate > 81) || (second_Offspring < 82 && third_Mate < 82) || 
		(!third_Mate) || (!second_Offspring) || (second_Offspring < 1)  || (second_Offspring > 162) || (third_Mate < 1)  || (third_Mate > 162)) {
		$("#myModal").modal();
	} else {
		removeSubmit3(second_Offspring, third_Mate);
	}
}

function removeSubmit3(second_Offspring, third_Mate) {
	$("#submit3").css("display", "none");
	$("#show3").css("display", "inline");
	searchDog3a(second_Offspring, third_Mate);
}


function searchDog3a(second_Offspring, third_Mate) {
	$.get("/student/get/" + second_Offspring, function(data3a) {
		searchDog3b(second_Offspring, third_Mate, data3a)
	})
}

function searchDog3b(second_Offspring, third_Mate, data3a) {
	$.get("/student/get/" + third_Mate, function(data3b) {
		console.log("Husky 3b " + data3b.huskyImage);		
		$("#holdsecond3a").html("<img src=assets/img/" + data3b.huskyImage + ">");		
		parent3 = data3a;
		mate3 = data3b;
		pickAllele1b();
	})
}

//randomly choose between one or the other allele for eye color
function pickAllele1b() {

	var e1 = parent3.eyeColorOne;
	var e2 = parent3.eyeColorTwo;
	var e3 = mate3.eyeColorOne;
	var e4 = mate3.eyeColorTwo;
	var hold1 = "";
	var hold2 = "";	

	var choose1 = Math.random();
	if (choose1 < 0.5) {
		hold1 = e1;
	} else {
		hold1 = e2;
	}

	var choose2 = Math.random();
	if (choose2 < 0.5) {
		hold2 = e3;
	} else {
		hold2 = e4;
	}
	if ((hold1.charAt(0) === hold1.charAt(0).toLowerCase()) && 
		(hold2.charAt(0) === hold2.charAt(0).toUpperCase())) {
		newE3 += (hold2 + hold1);
	} else {
		newE3 += (hold1 + hold2);		
	}
	pickAllele2b();
};

function pickAllele2b() {

	var e1 = parent3.coatColorOne;
	var e2 = parent3.coatColorTwo;
	var e3 = mate3.coatColorOne;
	var e4 = mate3.coatColorTwo;
	var hold1 = "";
	var hold2 = "";	

	var choose1 = Math.random();
	if (choose1 < 0.5) {
		hold1 = e1;
	} else {
		hold1 = e2;
	}

	var choose2 = Math.random();
	if (choose2 < 0.5) {
		hold2 = e3;
	} else {
		hold2 = e4;
	}

	if ((hold1.charAt(0) === "W") && 
		(hold2.charAt(0) === "G")) {
		newE3 += (hold2 + hold1);
	} else {
		newE3 += (hold1 + hold2);		
	}
	pickAllele3b();
};

function pickAllele3b() {

	var e1 = parent3.tailLengthOne;
	var e2 = parent3.tailLengthTwo;
	var e3 = mate3.tailLengthOne;
	var e4 = mate3.tailLengthTwo;
	var hold1 = "";
	var hold2 = "";	

	var choose1 = Math.random();
	if (choose1 < 0.5) {
		hold1 = e1;
	} else {
		hold1 = e2;
	}

	var choose2 = Math.random();
	if (choose2 < 0.5) {
		hold2 = e3;
	} else {
		hold2 = e4;
	}

	if ((hold1.charAt(0) === "S") && 
		(hold2.charAt(0) === "L")) {
		newE3 += (hold2 + hold1);
	} else {
		newE3 += (hold1 + hold2);		
	}
	pickAllele4b();
};

function pickAllele4b() {

	var e1 = parent3.tongueOne;
	var e2 = parent3.tongueTwo;
	var e3 = mate3.tongueOne;
	var e4 = mate3.tongueTwo;
	var hold1 = "";
	var hold2 = "";	

	var choose1 = Math.random();
	if (choose1 < 0.5) {
		hold1 = e1;
	} else {
		hold1 = e2;
	}

	var choose2 = Math.random();
	if (choose2 < 0.5) {
		hold2 = e3;
	} else {
		hold2 = e4;
	}

	if ((hold1.charAt(0) === hold1.charAt(0).toLowerCase()) && 
		(hold2.charAt(0) === hold2.charAt(0).toUpperCase())) {
		newE3 += (hold2 + hold1);
	} else {
		newE3 += (hold1 + hold2);		
	}
	pickAllele5b();
};

function pickAllele5b() {

	var e1 = parent3.sexOne;
	var e2 = parent3.sexTwo;
	var e3 = mate3.sexOne;
	var e4 = mate3.sexTwo;
	var hold1 = "";
	var hold2 = "";	

	var choose1 = Math.random();
	if (choose1 < 0.5) {
		hold1 = e1;
	} else {
		hold1 = e2;
	}

	var choose2 = Math.random();
	if (choose2 < 0.5) {
		hold2 = e3;
	} else {
		hold2 = e4;
	}

	if ((hold1.charAt(0) === "Y") && 
		(hold2.charAt(0) === "X")) {
		newE3 += (hold2 + hold1);
	} else {
		newE3 += (hold1 + hold2);		
	}
	searchForPuppy3();
};

function searchForPuppy3() {
	$.get("/student/puppy1/" + newE3, function(data2d) {

		var timestamp3 = "";

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

		    timestamp3 = (year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second);


		var updateData3 = {
		third_Mate: mate3.id,
      	third_Offspring: data2d.id,
      	third_Genotype: data2d.genoType,
      	third_HuskyImage: data2d.huskyImage,
      	third_createdAt: timestamp3
		}
		$("#thirdpuppy").html("<br>Your second puppy: <br><img src=assets/img/" + data2d.huskyImage + ">");
		updateStudent3(updateData3);
	})
}

function updateStudent3(updateData3) {
    $.ajax({
      method: "PUT",
      url: "/student/update3",
      data: updateData3
    })
  }


// get fourth parent and mate information

$("#submit4").on("click", function(event) { //change submit number

	    event.preventDefault();
	    var third_Offspring = studentInfo.third_Offspring;  //change 2
	    var fourth_Mate =  $('input[name="fourth_Mate"]').val(); //change 2
	    checkValues4(third_Offspring, fourth_Mate); //change 3
});


function checkValues4(third_Offspring, fourth_Mate) {
	if ((third_Offspring > 81 && fourth_Mate > 81) || (third_Offspring < 82 && fourth_Mate < 82) || 
		(!fourth_Mate) || (!third_Offspring) || (third_Offspring < 1)  || (third_Offspring > 162) ||
		(fourth_Mate < 1)  || (fourth_Mate > 162)) {
		$("#myModal").modal();
	} else {
		removeSubmit4(third_Offspring, fourth_Mate);
	}
}

function removeSubmit4(third_Offspring, fourth_Mate) {
	$("#submit4").css("display", "none");
	$("#show4").css("display", "inline");
	searchDog4a(third_Offspring, fourth_Mate);
}


function searchDog4a(third_Offspring, fourth_Mate) {
	$.get("/student/get/" + third_Offspring, function(data4a) {
		searchDog4b(third_Offspring, fourth_Mate, data4a)
	})
}

function searchDog4b(third_Offspring, fourth_Mate, data4a) {
	$.get("/student/get/" + fourth_Mate, function(data4b) {
		console.log("Husky 4b " + data4b.huskyImage);		
		$("#holdsecond4a").html("<img src=assets/img/" + data4b.huskyImage + ">");		
		parent4 = data4a;
		mate4 = data4b;
		pickAllele1c();
	})
}

//randomly choose between one or the other allele for eye color
function pickAllele1c() {

	var e1 = parent4.eyeColorOne;
	var e2 = parent4.eyeColorTwo;
	var e3 = mate4.eyeColorOne;
	var e4 = mate4.eyeColorTwo;
	var hold1 = "";
	var hold2 = "";	

	var choose1 = Math.random();
	if (choose1 < 0.5) {
		hold1 = e1;
	} else {
		hold1 = e2;
	}

	var choose2 = Math.random();
	if (choose2 < 0.5) {
		hold2 = e3;
	} else {
		hold2 = e4;
	}
	if ((hold1.charAt(0) === hold1.charAt(0).toLowerCase()) && 
		(hold2.charAt(0) === hold2.charAt(0).toUpperCase())) {
		newE4 += (hold2 + hold1);
	} else {
		newE4 += (hold1 + hold2);		
	}
	pickAllele2c();
};

function pickAllele2c() {

	var e1 = parent4.coatColorOne;
	var e2 = parent4.coatColorTwo;
	var e3 = mate4.coatColorOne;
	var e4 = mate4.coatColorTwo;
	var hold1 = "";
	var hold2 = "";	

	var choose1 = Math.random();
	if (choose1 < 0.5) {
		hold1 = e1;
	} else {
		hold1 = e2;
	}

	var choose2 = Math.random();
	if (choose2 < 0.5) {
		hold2 = e3;
	} else {
		hold2 = e4;
	}

	if ((hold1.charAt(0) === "W") && 
		(hold2.charAt(0) === "G")) {
		newE4 += (hold2 + hold1);
	} else {
		newE4 += (hold1 + hold2);		
	}
	pickAllele3c();
};

function pickAllele3c() {

	var e1 = parent4.tailLengthOne;
	var e2 = parent4.tailLengthTwo;
	var e3 = mate4.tailLengthOne;
	var e4 = mate4.tailLengthTwo;
	var hold1 = "";
	var hold2 = "";	

	var choose1 = Math.random();
	if (choose1 < 0.5) {
		hold1 = e1;
	} else {
		hold1 = e2;
	}

	var choose2 = Math.random();
	if (choose2 < 0.5) {
		hold2 = e3;
	} else {
		hold2 = e4;
	}

	if ((hold1.charAt(0) === "S") && 
		(hold2.charAt(0) === "L")) {
		newE4 += (hold2 + hold1);
	} else {
		newE4 += (hold1 + hold2);		
	}
	pickAllele4c();
};

function pickAllele4c() {

	var e1 = parent4.tongueOne;
	var e2 = parent4.tongueTwo;
	var e3 = mate4.tongueOne;
	var e4 = mate4.tongueTwo;
	var hold1 = "";
	var hold2 = "";	

	var choose1 = Math.random();
	if (choose1 < 0.5) {
		hold1 = e1;
	} else {
		hold1 = e2;
	}

	var choose2 = Math.random();
	if (choose2 < 0.5) {
		hold2 = e3;
	} else {
		hold2 = e4;
	}

	if ((hold1.charAt(0) === hold1.charAt(0).toLowerCase()) && 
		(hold2.charAt(0) === hold2.charAt(0).toUpperCase())) {
		newE4 += (hold2 + hold1);
	} else {
		newE4 += (hold1 + hold2);		
	}
	pickAllele5c();
};

function pickAllele5c() {

	var e1 = parent4.sexOne;
	var e2 = parent4.sexTwo;
	var e3 = mate4.sexOne;
	var e4 = mate4.sexTwo;
	var hold1 = "";
	var hold2 = "";	

	var choose1 = Math.random();
	if (choose1 < 0.5) {
		hold1 = e1;
	} else {
		hold1 = e2;
	}

	var choose2 = Math.random();
	if (choose2 < 0.5) {
		hold2 = e3;
	} else {
		hold2 = e4;
	}

	if ((hold1.charAt(0) === "Y") && 
		(hold2.charAt(0) === "X")) {
		newE4 += (hold2 + hold1);
	} else {
		newE4 += (hold1 + hold2);		
	}
	searchForPuppy4();
};

function searchForPuppy4() {
	$.get("/student/puppy1/" + newE4, function(data2e) {

		var timestamp4 = "";

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

		    timestamp4 = (year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second);


		var updateData4 = {
		fourth_Mate: mate4.id,
      	fourth_Offspring: data2e.id,
      	fourth_Genotype: data2e.genoType,
      	fourth_HuskyImage: data2e.huskyImage,
      	fourth_createdAt: timestamp4
		}
		$("#fourthpuppy").html("<br>Your second puppy: <br><img src=assets/img/" + data2e.huskyImage + ">");
		updateStudent4(updateData4);
	})
}

function updateStudent4(updateData4) {
    $.ajax({
      method: "PUT",
      url: "/student/update4",
      data: updateData4
    })
  }


// get fifth parent and mate information

$("#submit5").on("click", function(event) { //change submit number

	    event.preventDefault();
	    var fourth_Offspring = studentInfo.fourth_Offspring;  //change 2
	    var fifth_Mate =  $('input[name="fifth_Mate"]').val(); //change 2
	    checkValues5(fourth_Offspring, fifth_Mate); //change 3
});


function checkValues5(fourth_Offspring, fifth_Mate) {
	if ((fourth_Offspring > 81 && fifth_Mate > 81) || (fourth_Offspring < 82 && fifth_Mate < 82) || 
		(!fifth_Mate) || (!fourth_Offspring) || (fourth_Offspring < 1)  || (fourth_Offspring > 162) ||
		(fifth_Mate < 1)  || (fifth_Mate > 162)) {
		$("#myModal").modal();
	} else {
		removeSubmit5(fourth_Offspring, fifth_Mate);
	}
}

function removeSubmit5(fourth_Offspring, fifth_Mate) {
	$("#submit5").css("display", "none");
	$("#show5").css("display", "inline");
	searchDog5a(fourth_Offspring, fifth_Mate);
}


function searchDog5a(fourth_Offspring, fifth_Mate) {
	$.get("/student/get/" + fourth_Offspring, function(data5a) {
		searchDog5b(fourth_Offspring, fifth_Mate, data5a)
	})
}

function searchDog5b(fourth_Offspring, fifth_Mate, data5a) {
	$.get("/student/get/" + fifth_Mate, function(data5b) {
		console.log("Husky 5b " + data5b.huskyImage);		
		$("#holdsecond5a").html("<img src=assets/img/" + data5b.huskyImage + ">");		
		parent5 = data5a;
		mate5 = data5b;
		pickAllele1d();
	})
}

//randomly choose between one or the other allele for eye color
function pickAllele1d() {

	var e1 = parent5.eyeColorOne;
	var e2 = parent5.eyeColorTwo;
	var e3 = mate5.eyeColorOne;
	var e4 = mate5.eyeColorTwo;
	var hold1 = "";
	var hold2 = "";	

	var choose1 = Math.random();
	if (choose1 < 0.5) {
		hold1 = e1;
	} else {
		hold1 = e2;
	}

	var choose2 = Math.random();
	if (choose2 < 0.5) {
		hold2 = e3;
	} else {
		hold2 = e4;
	}
	if ((hold1.charAt(0) === hold1.charAt(0).toLowerCase()) && 
		(hold2.charAt(0) === hold2.charAt(0).toUpperCase())) {
		newE5 += (hold2 + hold1);
	} else {
		newE5 += (hold1 + hold2);		
	}
	pickAllele2d();
};

function pickAllele2d() {

	var e1 = parent5.coatColorOne;
	var e2 = parent5.coatColorTwo;
	var e3 = mate5.coatColorOne;
	var e4 = mate5.coatColorTwo;
	var hold1 = "";
	var hold2 = "";	

	var choose1 = Math.random();
	if (choose1 < 0.5) {
		hold1 = e1;
	} else {
		hold1 = e2;
	}

	var choose2 = Math.random();
	if (choose2 < 0.5) {
		hold2 = e3;
	} else {
		hold2 = e4;
	}

	if ((hold1.charAt(0) === "W") && 
		(hold2.charAt(0) === "G")) {
		newE5 += (hold2 + hold1);
	} else {
		newE5 += (hold1 + hold2);		
	}
	pickAllele3d();
};

function pickAllele3d() {

	var e1 = parent5.tailLengthOne;
	var e2 = parent5.tailLengthTwo;
	var e3 = mate5.tailLengthOne;
	var e4 = mate5.tailLengthTwo;
	var hold1 = "";
	var hold2 = "";	

	var choose1 = Math.random();
	if (choose1 < 0.5) {
		hold1 = e1;
	} else {
		hold1 = e2;
	}

	var choose2 = Math.random();
	if (choose2 < 0.5) {
		hold2 = e3;
	} else {
		hold2 = e4;
	}

	if ((hold1.charAt(0) === "S") && 
		(hold2.charAt(0) === "L")) {
		newE5 += (hold2 + hold1);
	} else {
		newE5 += (hold1 + hold2);		
	}
	pickAllele4d();
};

function pickAllele4d() {

	var e1 = parent5.tongueOne;
	var e2 = parent5.tongueTwo;
	var e3 = mate5.tongueOne;
	var e4 = mate5.tongueTwo;
	var hold1 = "";
	var hold2 = "";	

	var choose1 = Math.random();
	if (choose1 < 0.5) {
		hold1 = e1;
	} else {
		hold1 = e2;
	}

	var choose2 = Math.random();
	if (choose2 < 0.5) {
		hold2 = e3;
	} else {
		hold2 = e4;
	}

	if ((hold1.charAt(0) === hold1.charAt(0).toLowerCase()) && 
		(hold2.charAt(0) === hold2.charAt(0).toUpperCase())) {
		newE5 += (hold2 + hold1);
	} else {
		newE5 += (hold1 + hold2);		
	}
	pickAllele5d();
};

function pickAllele5d() {

	var e1 = parent5.sexOne;
	var e2 = parent5.sexTwo;
	var e3 = mate5.sexOne;
	var e4 = mate5.sexTwo;
	var hold1 = "";
	var hold2 = "";	

	var choose1 = Math.random();
	if (choose1 < 0.5) {
		hold1 = e1;
	} else {
		hold1 = e2;
	}

	var choose2 = Math.random();
	if (choose2 < 0.5) {
		hold2 = e3;
	} else {
		hold2 = e4;
	}

	if ((hold1.charAt(0) === "Y") && 
		(hold2.charAt(0) === "X")) {
		newE5 += (hold2 + hold1);
	} else {
		newE5 += (hold1 + hold2);		
	}
	searchForPuppy5();
};

function searchForPuppy5() {
	$.get("/student/puppy1/" + newE5, function(data2f) {

		var timestamp5 = "";

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

		    timestamp5 = (year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second);


		var updateData5 = {
		fifth_Mate: mate5.id,
      	fifth_Offspring: data2f.id,
      	fifth_Genotype: data2f.genoType,
      	fifth_HuskyImage: data2f.huskyImage,
      	fifth_createdAt: timestamp5
		}
		$("#fifthpuppy").html("<br>Your fifth puppy: <br><img src=assets/img/" + data2f.huskyImage + ">");
		updateStudent5(updateData5);
	})
}

function updateStudent5(updateData5) {
    $.ajax({
      method: "PUT",
      url: "/student/update5",
      data: updateData5
    })
  }

// get sixth parent and mate information
$("#submit6").on("click", function(event) {
    
    event.preventDefault();
    
    var fifth_Offspring = studentInfo.fifth_Offspring; 
    var sixth_Mate =  $('input[name="sixth_Mate"]').val();

    checkValues6(fifth_Offspring, sixth_Mate);
});


function checkValues6(fifth_Offspring, sixth_Mate) {
    if ((fifth_Offspring > 81 && sixth_Mate > 81) || (fifth_Offspring < 82 && sixth_Mate < 82) || 
        (!sixth_Mate) || (!fifth_Offspring) || (fifth_Offspring < 1)  || (fifth_Offspring > 162) ||
        (sixth_Mate < 1)  || (sixth_Mate > 162)) {

        $("#myModal").modal();
    } else {

        removeSubmit6(fifth_Offspring, sixth_Mate);
    }
};

function removeSubmit6(fifth_Offspring, sixth_Mate) {

    $("#submit6").css("display", "none");
    $("#show6").css("display", "inline");

    searchDog6a(fifth_Offspring, sixth_Mate);
};


function searchDog6a(fifth_Offspring, sixth_Mate) {

    $.get("/student/get/" + fifth_Offspring, function(data6a) {
        searchDog6b(fifth_Offspring, sixth_Mate, data6a)
   })
};

function searchDog6b(fifth_Offspring, sixth_Mate, data6a) {

    $.get("/student/get/" + sixth_Mate, function(data6b) {

        $("#holdsecond6a").html("<img src=assets/img/" + data6b.huskyImage + ">");		

        parent6 = data6a;
        mate6 = data6b;
        pickAllele1e();
    })
};

//randomly choose between one or the other allele for eye color
function pickAllele1e() {

    var e1 = parent6.eyeColorOne;
    var e2 = parent6.eyeColorTwo;
    var e3 = mate6.eyeColorOne;
    var e4 = mate6.eyeColorTwo;

    var hold1 = "";
    var hold2 = "";	

    var choose1 = Math.random();

    if (choose1 < 0.5) {
        hold1 = e1;
    } else {
        hold1 = e2;
    }

    var choose2 = Math.random();

    if (choose2 < 0.5) {
        hold2 = e3;
    } else {
        hold2 = e4;
    }

    if ((hold1.charAt(0) === hold1.charAt(0).toLowerCase()) && 
        (hold2.charAt(0) === hold2.charAt(0).toUpperCase())) {

        newE6 += (hold2 + hold1);
    } else {

        newE6 += (hold1 + hold2);		
    }

    pickAllele2e();
};

function pickAllele2e() {

    var e1 = parent6.coatColorOne;
    var e2 = parent6.coatColorTwo;
    var e3 = mate6.coatColorOne;
    var e4 = mate6.coatColorTwo;

    var hold1 = "";
    var hold2 = "";	

    var choose1 = Math.random();


    if (choose1 < 0.5) {
        hold1 = e1;
    } else {
        hold1 = e2;
	}

    var choose2 = Math.random();

    if (choose2 < 0.5) {
        hold2 = e3;
    } else {
        hold2 = e4;
    }


    if ((hold1.charAt(0) === "W") && (hold2.charAt(0) === "G")) {
        newE6 += (hold2 + hold1);
    } else {
        newE6 += (hold1 + hold2);		
    }

    pickAllele3e();
};

function pickAllele3e() {

    var e1 = parent6.tailLengthOne;
    var e2 = parent6.tailLengthTwo;
    var e3 = mate6.tailLengthOne;
    var e4 = mate6.tailLengthTwo;
    var hold1 = "";
    var hold2 = "";	

    var choose1 = Math.random();

    if (choose1 < 0.5) {
        hold1 = e1;
    } else {
        hold1 = e2;
    }

    var choose2 = Math.random();

    if (choose2 < 0.5) {
        hold2 = e3;
    } else {
        hold2 = e4;
    }

    if ((hold1.charAt(0) === "S") && (hold2.charAt(0) === "L")) {
        newE6 += (hold2 + hold1);
    } else {
        newE6 += (hold1 + hold2);		
    }

    pickAllele4e();
};

function pickAllele4e() {

    var e1 = parent6.tongueOne;
    var e2 = parent6.tongueTwo;
    var e3 = mate6.tongueOne;
    var e4 = mate6.tongueTwo;

    var hold1 = "";
    var hold2 = "";	

    var choose1 = Math.random();

    if (choose1 < 0.5) {
        hold1 = e1;
    } else {
        hold1 = e2;
    }

    var choose2 = Math.random();

    if (choose2 < 0.5) {
        hold2 = e3;
    } else {
        hold2 = e4;
    }

    if ((hold1.charAt(0) === hold1.charAt(0).toLowerCase()) && (hold2.charAt(0) === hold2.charAt(0).toUpperCase())) {
        newE6 += (hold2 + hold1);
    } else {
        newE6 += (hold1 + hold2);		
    }

    pickAllele5e();
};

function pickAllele5e() {

    var e1 = parent6.sexOne;
    var e2 = parent6.sexTwo;
    var e3 = mate6.sexOne;
    var e4 = mate6.sexTwo;

    var hold1 = "";
    var hold2 = "";	

    var choose1 = Math.random();

    if (choose1 < 0.5) {
        hold1 = e1;
    } else {
        hold1 = e2;
    }

    var choose2 = Math.random();

    if (choose2 < 0.5) {
        hold2 = e3;
    } else {
        hold2 = e4;
    }

    if ((hold1.charAt(0) === "Y") && (hold2.charAt(0) === "X")) {
        newE6 += (hold2 + hold1);
    } else {
        newE6 += (hold1 + hold2);		
    }

    searchForPuppy6();
};

function searchForPuppy6() {

    $.get("/student/puppy1/" + newE6, function(data2g) {

        var timestamp6 = "";

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

        timestamp6 = (year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second);


        var updateData6 = {
            sixth_Mate: mate6.id,
            sixth_Offspring: data2g.id,
            sixth_Genotype: data2g.genoType,
            sixth_HuskyImage: data2g.huskyImage,
            sixth_createdAt: timestamp6
        }

        $("#sixthpuppy").html("<br>Your sixth puppy: <br><img src=assets/img/" + data2g.huskyImage + ">");

        updateStudent6(updateData6);
	})
};

function updateStudent6(updateData6) {

    $.ajax({
        method: "PUT",
        url: "/student/update6",
        data: updateData6
    })
};

// get seventh parent and mate information
$("#submit7").on("click", function(event) {
    
    event.preventDefault();
    
    var sixth_Offspring = studentInfo.sixth_Offspring; 
    var seventh_Mate =  $('input[name="seventh_Mate"]').val();

    checkValues7(sixth_Offspring, seventh_Mate);
});


function checkValues7(sixth_Offspring, seventh_Mate) {
    if ((sixth_Offspring > 81 && seventh_Mate > 81) || (sixth_Offspring < 82 && seventh_Mate < 82) || 
        (!seventh_Mate) || (!sixth_Offspring) || (sixth_Offspring < 1)  || (sixth_Offspring > 162) ||
        (seventh_Mate < 1)  || (seventh_Mate > 162)) {

        $("#myModal").modal();
    } else {

        removeSubmit7(sixth_Offspring, seventh_Mate);
    }
};

function removeSubmit7(sixth_Offspring, seventh_Mate) {

    $("#submit7").css("display", "none");
    $("#show7").css("display", "inline");

    searchDog7a(sixth_Offspring, seventh_Mate);
};


function searchDog7a(sixth_Offspring, seventh_Mate) {

    $.get("/student/get/" + sixth_Offspring, function(data7a) {
        searchDog7b(sixth_Offspring, seventh_Mate, data7a)
   })
};

function searchDog7b(sixth_Offspring, seventh_Mate, data7a) {

    $.get("/student/get/" + seventh_Mate, function(data7b) {

        $("#holdsecond7a").html("<img src=assets/img/" + data7b.huskyImage + ">");      

        parent7 = data7a;
        mate7 = data7b;
        pickAllele1f();
    })
};

//randomly choose between one or the other allele for eye color
function pickAllele1f() {

    var e1 = parent7.eyeColorOne;
    var e2 = parent7.eyeColorTwo;
    var e3 = mate7.eyeColorOne;
    var e4 = mate7.eyeColorTwo;

    var hold1 = "";
    var hold2 = ""; 

    var choose1 = Math.random();

    if (choose1 < 0.5) {
        hold1 = e1;
    } else {
        hold1 = e2;
    }

    var choose2 = Math.random();

    if (choose2 < 0.5) {
        hold2 = e3;
    } else {
        hold2 = e4;
    }

    if ((hold1.charAt(0) === hold1.charAt(0).toLowerCase()) && 
        (hold2.charAt(0) === hold2.charAt(0).toUpperCase())) {

        newE7 += (hold2 + hold1);
    } else {

        newE7 += (hold1 + hold2);       
    }

    pickAllele2f();
};

function pickAllele2f() {

    var e1 = parent7.coatColorOne;
    var e2 = parent7.coatColorTwo;
    var e3 = mate7.coatColorOne;
    var e4 = mate7.coatColorTwo;

    var hold1 = "";
    var hold2 = ""; 

    var choose1 = Math.random();


    if (choose1 < 0.5) {
        hold1 = e1;
    } else {
        hold1 = e2;
    }

    var choose2 = Math.random();

    if (choose2 < 0.5) {
        hold2 = e3;
    } else {
        hold2 = e4;
    }


    if ((hold1.charAt(0) === "W") && (hold2.charAt(0) === "G")) {
        newE7 += (hold2 + hold1);
    } else {
        newE7 += (hold1 + hold2);       
    }

    pickAllele3f();
};

function pickAllele3f() {

    var e1 = parent7.tailLengthOne;
    var e2 = parent7.tailLengthTwo;
    var e3 = mate7.tailLengthOne;
    var e4 = mate7.tailLengthTwo;

    var hold1 = "";
    var hold2 = ""; 

    var choose1 = Math.random();

    if (choose1 < 0.5) {
        hold1 = e1;
    } else {
        hold1 = e2;
    }

    var choose2 = Math.random();

    if (choose2 < 0.5) {
        hold2 = e3;
    } else {
        hold2 = e4;
    }

    if ((hold1.charAt(0) === "S") && (hold2.charAt(0) === "L")) {
        newE7 += (hold2 + hold1);
    } else {
        newE7 += (hold1 + hold2);       
    }

    pickAllele4f();
};

function pickAllele4f() {

    var e1 = parent7.tongueOne;
    var e2 = parent7.tongueTwo;
    var e3 = mate7.tongueOne;
    var e4 = mate7.tongueTwo;

    var hold1 = "";
    var hold2 = ""; 

    var choose1 = Math.random();

    if (choose1 < 0.5) {
        hold1 = e1;
    } else {
        hold1 = e2;
    }

    var choose2 = Math.random();

    if (choose2 < 0.5) {
        hold2 = e3;
    } else {
        hold2 = e4;
    }

    if ((hold1.charAt(0) === hold1.charAt(0).toLowerCase()) && (hold2.charAt(0) === hold2.charAt(0).toUpperCase())) {
        newE7 += (hold2 + hold1);
    } else {
        newE7 += (hold1 + hold2);       
    }

    pickAllele5f();
};

function pickAllele5f() {

    var e1 = parent7.sexOne;
    var e2 = parent7.sexTwo;
    var e3 = mate7.sexOne;
    var e4 = mate7.sexTwo;

    var hold1 = "";
    var hold2 = ""; 

    var choose1 = Math.random();

    if (choose1 < 0.5) {
        hold1 = e1;
    } else {
        hold1 = e2;
    }

    var choose2 = Math.random();

    if (choose2 < 0.5) {
        hold2 = e3;
    } else {
        hold2 = e4;
    }

    if ((hold1.charAt(0) === "Y") && (hold2.charAt(0) === "X")) {
        newE7 += (hold2 + hold1);
    } else {
        newE7 += (hold1 + hold2);       
    }

    searchForPuppy7();
};

function searchForPuppy7() {

    $.get("/student/puppy1/" + newE7, function(data2h) {

        var timestamp7 = "";

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

        timestamp7 = (year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second);


        var updateData7 = {
            seventh_Mate: mate7.id,
            seventh_Offspring: data2h.id,
            seventh_Genotype: data2h.genoType,
            seventh_HuskyImage: data2h.huskyImage,
            seventh_createdAt: timestamp7
        }

        $("#seventhpuppy").html("<br>Your seventh puppy: <br><img src=assets/img/" + data2h.huskyImage + ">");

        updateStudent7(updateData7);
    })
};

function updateStudent7(updateData7) {

    $.ajax({
        method: "PUT",
        url: "/student/update7",
        data: updateData7
    })
}

});



