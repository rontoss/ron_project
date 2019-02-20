"use strict"

class coachingStaff {
  constructor(id, name, nationality, age, roll) {
    this._id = id;
    this._name = name;
    this._nationality = nationality;
    this._age = age;
    this._roll = roll;
  }
  get id() {
    return this._id;
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

  set id(value) {
    return this._id = value;
  }
  set name(value) {
    return this._name = value;
  }
  set nationality(value) {
    return this._nationality = value;
  }
  set age(value) {
    return this._age = value;
  }
  set roll(value) {
    return this._roll = value;
  }
}
