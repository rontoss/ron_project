"use strict";

class footballClub {
  constructor(club_id, clubName, location, stadiumCapacity, league, squadSize) {
    this._club_id = club_id;
    this._clubName = clubName;
    this._location = location;
    this._stadiumCapacity = stadiumCapacity stadiumCapacity;
    this._league = league;
    this._squadSize = squadSize;
  }
  get club_id() {
    return this._id;
  }
  get clubName() {
    return this._clubName;
  }
  get location() {
    return this._location;
  }
  get stadiumCapacity() {
    return this._stadiumCapacity;
  }
  get league() {
    return this._league;
  }
  get squadSize() {
    return this._squadSize;
  }

  set club_id(club_id) {
    this._club_id = club_id;
  }
  set clubName(clubName) {
    this._clubName = clubName;
  }
  set location(location) {
    this._location = location;
  }
  set stadiumCapacity(stadiumCapacity) {
    this._stadiumCapacity = stadiumCapacity;
  }
  set league(league) {
    this._league = league;
  }
  set squadSize(squadSize) {
    this._squadSize = squadSize;
  }
}

module.exports = footballClub;
