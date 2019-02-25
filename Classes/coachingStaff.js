"use strict"

class coachingStaff {
  constructor(coachingStaff_id, firstName, lastName, roll) {
    this._coachingStaff_id = coachingStaff_id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._roll = roll;
  }
  get coachingStaff_id() {
    return this._coachingStaff_id;
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

  set coachingStaff_id(coachingStaff_id) {
    this._coachingStaff_id = coachingStaff_id;
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
