var expect = require('chai').expect;
var footballClub = require('../Classes/footballClub');

describe('footballClub_class', function () {
    it('should return an object', function () {

var voetbalClub = new footballClub(1, "NAC", "Breda", 19000, "Eredivisie", 31);

expect(voetbalClub.stadiumCapacity).to.be.equal(19000);
expect(voetbalClub.clubName).to.be.equal("NAC");

    });
});
