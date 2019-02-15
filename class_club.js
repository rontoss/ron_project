"use strict"

class club {
  constructor(id, clubName, location, stadiumCapacity, league, squadSize) {
    this._id = id;
    this._clubName = clubName;
    this._location = location;
    this._stadiumCapacity = stadiumCapacity;
    this._league = league;
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
  get stadiumCapacity() {
    return this._stadiumCapacity;
  }
  get league() {
    return this._league;
  }
  get squadSize() {
    return this._squadSize;
  }
}
