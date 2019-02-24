"use strict"

class goalkeeper {
  constructor(goalkeeper_id, number, preferredFoot, isReserved, diving, handling, kicking, reflexes, positionScore) {
    this._goalkeeper_id = id;
    this._number = number;
    this._preferredFoot = preferredFoot;
    this._isReserved = isReserved;
    this._diving = diving;
    this._handling = handling;
    this._kicking = kicking;
    this._reflexes = reflexes;
    this._positionScore = positionScore;

  }
  get goalkeeper_id() {
    return this._goalkeeper_id;
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
  get positionScore() {
    return this._positionScore;
  }

  set goalkeeper_id(goalkeeper_id) {
    this._goalkeeper_id = goalkeeper_id;
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
  set positionScore(positionScore) {
    this._position = positionScore;
  }
}

module.exports = goalkeeper;
