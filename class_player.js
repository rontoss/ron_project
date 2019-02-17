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


  set id(value) {
    return this._id = value;
  }
  set number(value) {
    return this._number = value;
  }
  set position(value) {
    return this._position = value;
  }
  set preferredFoot(value) {
    return this._preferredFoot = value;
  }
  set isReserved(value) {
    return this._isReserved = value;
  }
  set skills(value) {
    return this._skills = value;
  }
}
