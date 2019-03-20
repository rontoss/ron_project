var expect = require('chai').expect;
var fieldPlayer = require('../Classes/fieldPlayer');

describe('fieldPlayer_class', function() {
  it('should return all info about a fieldPlayer', function() {

    var veldSpeler = new fieldPlayer(1, "Pascal Ramon", "Lundqvist",
      12, "Centre Attacking Midfielder", "right", "no", 73, 61, 60, 68, 31, 58);

    expect(veldSpeler._firstName).to.be.equal("Pascal Ramon");
    expect(veldSpeler._lastName).to.be.equal("Lundqvist");
    expect(veldSpeler._number).to.be.equal(12);
    expect(veldSpeler._position).to.be.equal("Centre Attacking Midfielder");
    expect(veldSpeler._isReserved).to.be.equal("no");
    expect(veldSpeler.pace).to.be.equal(73);
    expect(veldSpeler.shooting).to.be.equal(61);
    expect(veldSpeler.passing).to.be.equal(60);
    expect(veldSpeler.dribble).to.be.equal(68);
    expect(veldSpeler.defending).to.be.equal(31);
    expect(veldSpeler.physical).to.be.equal(58);

  });
});
