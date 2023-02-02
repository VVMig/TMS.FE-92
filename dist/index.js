"use strict";

var _infoAbourUsers;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var users = [{
  name: "Harry Felton",
  phone: "(09) 897 33 33",
  email: "felton@gmail.com",
  animals: ["cat"],
  cars: ["bmw"],
  hasChildren: false,
  hasEducation: true
}, {
  name: "May Sender",
  phone: "(09) 117 33 33",
  email: "sender22@gmail.com",
  hasChildren: true,
  hasEducation: true
}, {
  name: "Henry Ford",
  phone: "(09) 999 93 23",
  email: "ford0@gmail.com",
  cars: ["bmw", "audi"],
  hasChildren: true,
  hasEducation: false
}];
function findNamesInArray(arr) {
  var names = arr.map(function (_ref) {
    var name = _ref.name;
    return name;
  }).join(", ");
  console.log(names);
}
findNamesInArray(users);
function findAndCountCarInArray(arr) {
  var findCars = arr.filter(function (_ref2) {
    var cars = _ref2.cars;
    return cars;
  }).map(function (_ref3) {
    var cars = _ref3.cars;
    return cars;
  }).join().split(",");
  var countCars = findCars.length;
  console.log(countCars);
}
findAndCountCarInArray(users);
function findWhoHasEducationInArry(arr) {
  var findEducatedPeople = arr.filter(function (_ref4) {
    var hasEducation = _ref4.hasEducation;
    return hasEducation;
  });
  var namesOfEducatedPeople = findEducatedPeople.map(function (_ref5) {
    var name = _ref5.name;
    return name;
  }).join(", ");
  console.log(namesOfEducatedPeople);
}
findWhoHasEducationInArry(users);
function findWhoHasAnimalsInArry(arr) {
  var findEducatedPeople = arr.filter(function (_ref6) {
    var animals = _ref6.animals;
    return animals;
  });
  var namesOfEducatedPeople = findEducatedPeople.map(function (_ref7) {
    var name = _ref7.name;
    return name;
  }).join(", ");
  console.log(namesOfEducatedPeople);
}
findWhoHasAnimalsInArry(users);
function getBrandsOfCarsInArray(arr) {
  var getBrands = arr.filter(function (_ref8) {
    var cars = _ref8.cars;
    return cars;
  }).map(function (_ref9) {
    var cars = _ref9.cars;
    return cars;
  }).join(", ");
  return getBrands;
}
getBrandsOfCarsInArray(users);
var USERS;
(function (USERS) {
  USERS["USER_1"] = "USER_1";
  USERS["USER_2"] = "USER_2";
  USERS["USER_3"] = "USER_3";
})(USERS || (USERS = {}));
var infoAbourUsers = (_infoAbourUsers = {}, _defineProperty(_infoAbourUsers, USERS.USER_1, users[0]), _defineProperty(_infoAbourUsers, USERS.USER_2, users[1]), _defineProperty(_infoAbourUsers, USERS.USER_3, users[2]), _infoAbourUsers);
console.log(infoAbourUsers);
var Book = /*#__PURE__*/function () {
  function Book() {
    _classCallCheck(this, Book);
    this.title = arguments.length <= 0 ? undefined : arguments[0];
    this.author = arguments.length <= 1 ? undefined : arguments[1];
    this.year = arguments.length <= 2 ? undefined : arguments[2];
  }
  _createClass(Book, [{
    key: "setTitle",
    value: function setTitle(title) {
      this.title = title;
    }
  }, {
    key: "setAuthor",
    value: function setAuthor(author) {
      this.author = author;
    }
  }, {
    key: "setYear",
    value: function setYear(year) {
      this.year = year;
    }
  }, {
    key: "Title",
    get: function get() {
      return this.title;
    }
  }, {
    key: "Author",
    get: function get() {
      return this.author;
    }
  }, {
    key: "Year",
    get: function get() {
      return this.year;
    }
  }], [{
    key: "getInfo",
    value: function getInfo(author, title, year) {
      return "".concat(author, "-").concat(title, "-").concat(year);
    }
  }]);
  return Book;
}();
var book = new Book("title", "author", 2023);
var getInfoAboutBook = new Book(Book.getInfo(book.Author, book.Title, book.Year));
function extractData(obj, key) {
  return obj[key];
}
var object = {
  user: {
    name: "Chris"
  }
};
extractData(object, "user").name;