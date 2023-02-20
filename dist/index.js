"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
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
var userNames = users.map(function (el) {
  return el.name;
}).join(", ");
console.log(userNames);
var countCars = function countCars(arr) {
  var result = 0;
  for (var index = 0; index < arr.length; index++) {
    if (Array.isArray(arr[index].cars)) {
      result += arr[index].cars.length;
    }
  }
  return result;
};
console.log(countCars(users));
var countCars2 = users.reduce(function (acc, el) {
  if (el.cars !== undefined) {
    acc += el.cars.length;
  }
  return acc;
}, 0);
console.log(countCars2);
var filterUsersWithEducation = function filterUsersWithEducation(arr) {
  return arr.filter(function (el) {
    return el.hasEducation === true;
  });
};
console.log(filterUsersWithEducation(users));
var filterUsersWithAnimals = function filterUsersWithAnimals(arr) {
  return arr.filter(function (el) {
    return el.animals;
  });
};
console.log(filterUsersWithAnimals(users));
var createCarsString = function createCarsString(arr) {
  return arr.reduce(function (acc, el) {
    var _a;
    return ((_a = el.cars) === null || _a === void 0 ? void 0 : _a.length) ? [].concat(_toConsumableArray(acc), _toConsumableArray(el.cars)) : acc;
  }, []).join(", ");
};
console.log(createCarsString(users));
var userInfo = {
  user1: users[0],
  user2: users[1],
  user3: users[2]
};
console.log(userInfo);
var Book = /*#__PURE__*/function () {
  function Book(name, author, year) {
    _classCallCheck(this, Book);
    this.name = name;
    this.author = author;
    this.year = year;
  }
  _createClass(Book, [{
    key: "setName",
    set: function set(name) {
      this.name = name;
    }
  }, {
    key: "getName",
    get: function get() {
      return this.name;
    }
  }, {
    key: "setAuthor",
    set: function set(author) {
      this.author = author;
    }
  }, {
    key: "getAuthor",
    get: function get() {
      return this.author;
    }
  }, {
    key: "setYear",
    set: function set(year) {
      this.year = year;
    }
  }, {
    key: "getYear",
    get: function get() {
      return this.year;
    }
  }], [{
    key: "bookInfo",
    value: function bookInfo(obj) {
      return "".concat(obj.author, "-").concat(obj.name, "-").concat(obj.year);
    }
  }]);
  return Book;
}();
var book = new Book("The Sign of Four", "Arthur Conan Doyle", 1890);
console.log(Book.bookInfo(book));
function extractData(obj, key) {
  return obj[key];
}
var object = {
  user: {
    name: "Chris"
  }
};
console.log(extractData(object, "user").name);