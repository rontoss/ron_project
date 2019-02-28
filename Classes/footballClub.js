"use strict";

class footballClub {
  constructor(id, clubName, location, stadiumName, stadiumCapacity, league, squadSize) {
    this._id = id;
    this._clubName = clubName;
    this._location = location;
    this._stadiumName = stadiumName;
    this._stadiumCapacity = stadiumCapacity;
    this._league = league;
    this._squadSize = squadSize;
  }
  get id() {
    return this._id;
  }
  get clubName() {
    return this._clubName;
  }
  get location() {
    return this._location;
  }
  get stadiumName() {
    return this._stadiumName;
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

  set id(id) {
    this._id = id;
  }
  set clubName(clubName) {
    this._clubName = clubName;
  }
  set location(location) {
    this._location = location;
  }
  set stadiumName(stadiumName) {
    this._stadiumName = stadiumName;
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
