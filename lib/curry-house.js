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

function random (a) {
  return function (b) {
    return Math.floor((Math.random() * (a / 4) ) + (b - 5) );
  };
}

function concat () {

}

var prependGreeting = null;

function add () {

}

var add4and5 = null;

function calculator () {

}

var add5 = null;
var sub5 = null;
var multiply5 = null;
var divide5 = null;
var mod5 = null;
var pow3 = null;

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