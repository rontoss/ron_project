var expect = require('chai').expect;
var coachingStaff = require('../Classes/coachingStaff');

describe('coachingStaff_class', function() {
  it('should return all info about a coachingStaff', function() {

    var staff = new coachingStaff(1, "Jelle", "ten Rouwelaar",
      "Goalkeeping Coach");

    expect(staff._firstName).to.be.equal("Jelle");
    expect(staff._lastName).to.be.equal("ten Rouwelaar");
    expect(staff._roll).to.be.equal("Goalkeeping Coach");

  });
});
