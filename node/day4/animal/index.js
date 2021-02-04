//Animal say noting eat eating
//bird say ji...ji(动态的方法)  duck say  ga...ga(静态方法)
// call util.inherits module exports new 
//animal.js  duck.js  bird.js  index.js

var Animal = require("./animal.js");
var Bird = require("./bird");
const duck = require("./duck");
var Duck = require("./duck");

var animal = new Animal();
animal.say();
animal.eat();

var bird = new Bird();
bird.say();
bird.eat();

duck.say();
duck.eat();