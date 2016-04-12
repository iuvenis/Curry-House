var curry = require('./curry');

function calculate (a) {
  return function (opperator) {
    switch (opperator) {
      case ('+'): case ('add'):
        return function (b) {
          return a + b;
        };
      case ('-'): case ('subtract'):
        return function (b) {
          return a - b;
        };
      case ('*'): case ('multiply'):
        return function (b) {
          return a * b;
        };
      case ('/'): case ('divide'):
        return function (b) {
          return a / b;
        };
      case ('%'): case ('modulo'):
        return function (b) {
          return a % b;
        };
      case ('^'): case ('power of'):
        return function (b) {
          return Math.pow(a, b);
        };
    }
  };
}
//
function random (start) {
    return {
      to : function (end) {
        return Math.floor((Math.random() * ( end - start ) + start));
      },
      toInclude : function (end) {
        end += 1;
        return Math.floor((Math.random() * ( end - start ) + start));
      }
    };
}

function concat (a, b) {
  return String(a + b);
}

var prependGreeting = function prependGreeting (name){
  return 'Hello ' + name;
};

var add4and5 = function add (num3) {
      return 4 + 5 + num3;
};


function calculator (opperation) {

  switch (opperation) {
      case ('+'): case ('add'):
        return function (op2, op1) {
          return op1 + op2;
        };
      case ('-'): case ('subtract'):
        return function (op2, op1) {
          return op1 - op2;
        };
      case ('*'): case ('multiply'):
        return function (op2, op1) {
          return op1 * op2;
        };
      case ('/'): case ('divide'):
        return function (op2, op1) {
          return op1 / op2;
        };
      case ('%'): case ('modulo'):
        return function (op2, op1) {
          return op1 % op2;
        };
      case ('^'): case ('power of'):
        return function (op2, op1) {
          return Math.pow(op1, op2);
        };
    }
}

var add5 = function (a){
      return 5 + a;
  };
var sub5 = function (a){
      return  a - 5;
  };
var multiply5 = function (a){
      return 5 * a;
  };
var divide5 = function (a){
      return a / 5;
  };
var mod5 = function (a){
      return   a % 5;
  };
var pow3 = function (a){
      return Math.pow(a, 3);
  };

module.exports = {
  calculate : calculate,
  random : random,
  prependGreeting : prependGreeting,
  add4and5 : add4and5,
  calculator : calculator,
  add5 : add5,
  sub5 : sub5,
  multiply5 : multiply5,
  divide5 : divide5,
  mod5 : mod5,
  pow3 : pow3
};