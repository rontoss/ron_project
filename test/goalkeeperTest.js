var expect = require('chai').expect;
var goalkeeper = require('../Classes/goalkeeper');

describe('goalkeeper_class', function() {
  it('should return all info about a goalkeeper', function() {

    var goalie = new goalkeeper(1, "Benjamin", "van Leer",
      1, "right", "no", 72, 77, 65, 75, 44, 72);

    expect(goalie._firstName).to.be.equal("Benjamin");
    expect(goalie._lastName).to.be.equal("van Leer");
    expect(goalie.number).to.be.equal(1);
    expect(goalie._preferredFoot).to.be.equal("right");
    expect(goalie._isReserved).to.be.equal("no");
    expect(goalie.diving).to.be.equal(72);
    expect(goalie.handling).to.be.equal(77);
    expect(goalie.kicking).to.be.equal(65);
    expect(goalie.reflexes).to.be.equal(75);
    expect(goalie.speed).to.be.equal(44);
    expect(goalie.positionScore).to.be.equal(72);
  });
});
