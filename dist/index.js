"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _infoAbourUsers;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
function countCarInArray(arr) {
  var countCars = arr.map(function (_ref2) {
    var cars = _ref2.cars;
    return cars;
  }).reduce(function (acc, cur) {
    return cur ? acc + cur.length : acc + 0;
  }, 0);
  console.log(countCars);
}
countCarInArray(users);
function findWhoHasEducationInArry(arr) {
  var findEducatedPeople = arr.filter(function (_ref3) {
    var hasEducation = _ref3.hasEducation;
    return hasEducation;
  });
  var namesOfEducatedPeople = findEducatedPeople.map(function (_ref4) {
    var name = _ref4.name;
    return name;
  }).join(", ");
  console.log(findEducatedPeople, namesOfEducatedPeople);
}
findWhoHasEducationInArry(users);
function findWhoHasAnimalsInArry(arr) {
  var findEducatedPeople = arr.filter(function (_ref5) {
    var animals = _ref5.animals;
    return animals;
  });
  var namesOfEducatedPeople = findEducatedPeople.map(function (_ref6) {
    var name = _ref6.name;
    return name;
  }).join(", ");
  console.log(findEducatedPeople, namesOfEducatedPeople);
}
findWhoHasAnimalsInArry(users);
function getBrandsOfCarsInArray(arr) {
  var getBrands = arr.reduce(function (acc, cur) {
    var _a;
    return ((_a = cur.cars) === null || _a === void 0 ? void 0 : _a.values) ? [].concat(_toConsumableArray(acc), _toConsumableArray(cur === null || cur === void 0 ? void 0 : cur.cars)) : _toConsumableArray(acc);
  }, []).join(", ");
  console.log(getBrands);
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
    value: function getInfo(book) {
      return "".concat(book.author, "-").concat(book.title, "-").concat(book.year);
    }
  }]);
  return Book;
}();
var book = new Book("title", "author", 2023);
var getInfoAboutBook = new Book(Book.getInfo(book));
function extractData(obj, key) {
  return obj[key];
}
var object = {
  user: {
    name: "Chris"
  }
};
extractData(object, "user").name;