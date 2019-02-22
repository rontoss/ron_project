"use strict";

class footballClub {
  constructor(id, clubName, location, stadiumCapacity, league, squadSize) {
    this._club_id = club_id;
    this._clubName = clubName;
    this._location = location;
    this._stadiumCapacity = stadiumCapacity;
    this._league = league;
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

  set club_id(value) {
    return this._id = value;
  }
  set name(value) {
    return this._name = value;
  }
  set nationality(value) {
    return this._nationality = value;
  }
  set age(value) {
    return this._age = value;
  }
  set roll(value) {
    return this._roll = value;
  }
}

module.exports = footballClub;
