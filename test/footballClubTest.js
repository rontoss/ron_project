var expect = require('chai').expect;
var footballClub = require('../Classes/footballClub');

describe('footballClub_class', function () {
    it('should return all info about a footballclub', function () {

var voetbalClub = new footballClub(1, "NAC", "Breda", 19000, "Eredivisie", 31);

expect(voetbalClub.clubName).to.be.equal("NAC");
expect(voetbalClub.location).to.be.equal("Breda");
expect(voetbalClub.stadiumCapacity).to.be.equal(19000);
expect(voetbalClub.league).to.be.equal("Eredivisie");
expect(voetbalClub.squadSize).to.be.equal(31);

    });
});
