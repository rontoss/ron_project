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

  set goalkeeper_id(value) {
    return this._goalkeeper_id = value;
  }
  set number(value) {
    return this._number = value;
  }
  set preferredFoot(value) {
    return this._preferredFoot = value;
  }
  set isReserved(value) {
    return this._isReserved = value;
  }
  set diving(value) {
    return this._diving = value;
  }
  set handling(value) {
    return this._handling = value;
  }
  set kicking(value) {
    return this._kicking = value;
  }
  set reflexes(value) {
    return this._reflexes = value;
  }
  set positionScore(value) {
    return this._position = value;
  }
}
