"use strict"

class coachingStaff {
  constructor(id, firstName, lastName, roll) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._roll = roll;
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

  get roll() {
    return this._roll;
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

  set roll(roll) {
    this._roll = roll;
  }
}

module.exports = coachingStaff;
