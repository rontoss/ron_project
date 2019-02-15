"use strict"

class player {
  constructor(id, number, position, preferredFoot, isReserved, skills) {
    this._id = id;
    this._number = number;
    this._position = position;
    this._preferredFoot = preferredFoot;
    this._isReserved = isReserved;
    this._skills = skills;
  }
  get id() {
    return this._id;
  }
  get number() {
    return this._number;
  }
  get position() {
    return this._position;
  }
  get preferredFoot() {
    return this._preferredFoot;
  }
  get isReserved() {
    return this._isReserved;
  }
  get skills() {
    return this._skills;
  }
}
