"use strict"

class goalkeeper {
  constructor(id, firstName, lastName, number, preferredFoot, isReserved, diving, handling, kicking, reflexes, speed, positionScore) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._number = number;
    this._preferredFoot = preferredFoot;
    this._isReserved = isReserved;
    this._diving = diving;
    this._handling = handling;
    this._kicking = kicking;
    this._reflexes = reflexes;
    this._speed = speed;
    this._positionScore = positionScore;

  }
  get id() {
    return this._id;
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
  get preferredFoot() {
    return this._preferredFoot;
  }
  get isReserved() {
    return this._isReserved;
  }
  get diving() {
    return this._diving;
  }
  get handling() {
    return this._handling;
  }
  get kicking() {
    return this._kicking;
  }
  get reflexes() {
    return this._reflexes;
  }
  get speed() {
    return this._speed;
  }
  get positionScore() {
    return this._positionScore;
  }

  set id(id) {
    this._id = id;
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
  set preferredFoot(preferredFoot) {
    this._preferredFoot = preferredFoot;
  }
  set isReserved(isReserved) {
    this._isReserved = isReserved;
  }
  set diving(diving) {
    this._diving = diving;
  }
  set handling(handling) {
    this._handling = handling;
  }
  set kicking(kicking) {
    this._kicking = kicking;
  }
  set reflexes(reflexes) {
    this._reflexes = reflexes;
  }
  set speed(speed) {
    this._speed = speed;
  }
  set positionScore(positionScore) {
    this._position = positionScore;
  }
}

module.exports = goalkeeper;
