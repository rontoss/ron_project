"use strict"

class fieldPlayer {
  constructor(fieldPlayer_id, firstName, lastName, number, position, preferredFoot, isReserved, pace, shooting, passing, dribble, defending, physical) {
    this._fieldPlayer_id = fieldPlayer_id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._number = number;
    this._position = position;
    this._preferredFoot = preferredFoot;
    this._isReserved = isReserved;
    this._pace = pace;
    this._shooting = shooting;
    this._passing = passing;
    this._dribble = dribble;
    this._defending = defending;
    this._physical = physical;
  }
  get fieldPlayer_id() {
    return this._fieldPlayer_id;
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
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
  get pace() {
    return this._pace;
  }
  get shooting() {
    return this._shooting;
  }
  get passing() {
    return this._passing;
  }
  get dribble() {
    return this._dribble;
  }
  get defending() {
    return this._defending;
  }
  get physical() {
    return this._physical;
  }

  set fieldPlayer_id(fieldPlayer_id) {
    this._fieldPlayer_id = fieldPlayer_id;
  }
  set firstName(firstName) {
    this._firstName = firstName;
  }
  set lastName(lastName) {
    this._lastName = lastName;
  }
  set number(number) {
    this._number = number;
  }
  set position(position) {
    this._position = position;
  }
  set preferredFoot(preferredFoot) {
    this._preferredFoot = preferredFoot;
  }
  set isReserved(isReserved) {
    this._isReserved = isReserved;
  }
  set pace(pace) {
    this._pace = pace;
  }
  set shooting(shooting) {
    this._shooting = shooting;
  }
  set passing(passing) {
    this._passing = passing;
  }
  set dribble(dribble) {
    this._dribble = dribble;
  }
  set defending(defending) {
    this._defending = defending;
  }
  set physical(physical) {
    this._physical = physical;
  }
}

module.exports = fieldPlayer;
