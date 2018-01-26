
var expect = require("chai").expect;

////////////////////////////////////////////////

var choose1 = function() {
	var e1 = parent.eyeColorOne;
	var e2 = parent.eyeColorTwo;
	var e3 = mate1.eyeColorOne;
	var e4 = mate1.eyeColorTwo;
	var hold1 = "";
	var hold2 = "";	

	Math.random();
	if (choose1 < 0.5) {
		hold1 = e1;
	} else {
		hold1 = e2;
	}
}

describe("Choose1", function() {
	it("should randomly select an ellele from parent", function() {
		expect(choose1()).to.equal();
	});

	it("should throw if e1 or e2 are not found", function() {
		expect(function() {
			choose1();
		}).to.throw(Error);
	});
});

////////////////////////////////////////////////

var pickAllele1 = function {

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
};

describe("PickAllele1", function() {
	it("should randomly choose one allele of the first parent and one of the first mate", function() {
		expect()
	})
})

////////////////////////////////////////////////



var expect = require('chai').expect
  	e1 = parent.eyeColorOne,
	e2 = parent.eyeColorTwo,
	e3 = mate1.eyeColorOne,
	e4 = mate1.eyeColorTwo;

expect(e1).to.be.a('string');
expect(e2).to.be.a('string');
expect(e3).to.be.a('string');
expect(e4).to.be.a('string');
expect(e1).to.have.lengthOf(1);
expect(e2).to.have.lengthOf(1);
expect(e3).to.have.lengthOf(1);
expect(e4).to.have.lengthOf(1);






























