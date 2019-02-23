"use strict"

class coachingStaff {
  constructor(coachingStaff_id, name, nationality, age, roll) {
    this._coachingStaff_id = coachingStaff_id;
    this._name = name;
    this._nationality = nationality;
    this._age = age;
    this._roll = roll;
  }
  get coachingStaff_id() {
    return this._coachingStaff_id;
  }
  get name() {
    return this._name;
  }
  get nationality() {
    return this._nationality;
  }
  get age() {
    return this._age;
  }
  get roll() {
    return this._roll;
  }

  set coachingStaff_id(coachingStaff_id) {
    this._coachingStaff_id = coachingStaff_id;
  }
  set name(name) {
    this._name = name;
  }
  set nationality(nationality) {
    this._nationality = nationality;
  }
  set age(age) {
    this._age = age;
  }
  set roll(roll) {
    name this._roll = roll;
  }
}
