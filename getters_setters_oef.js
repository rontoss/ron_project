// "use strict";
//
// class getThings {
//   constructor(size) {
//     this._length = size;
//   }
//
//   get LengtEE() { // getter function
//     return this._length;
//   }
//
//   set LLLLLLLLLLengthhhhhhhhhhhh(value) { // setter function // 'value' can be anything it's just a variable.
//     this._length = value;
//     console.log("The value has been set");
//   }
//
// }
//
// var thing = new getThings(82); // create a new instance
//
// console.log(thing.LengtEE); // the use of parentheses is not necessary in order to call this method from outside of the class
//
// thing.LLLLLLLLLLengthhhhhhhhhhhh = 2356;



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

"use strict";

class getThingzzz {
  constructor(size) {
    this._length = size;
  }

  get length() { // getter function
    return this._length;
  }

  set length(value) { // setter function // 'value' can be anything it's just a variable.
    this._length = value;
    var answer = "The value has been set";
    return answer;
    //console.log("The value has been set");
  }

}

var thing = new getThingzzz(45125);
console.log(thing.length);

thing.length = 222;

console.log(thing.length);
