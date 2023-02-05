"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
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
var namesUsers = users.map(function (el) {
  return el.name;
}).join(', ');
console.log(namesUsers);
var namesUsers2 = users.map(function (_ref) {
  var name = _ref.name;
  return name;
}).join(', ');
console.log(namesUsers2);
var sumOfCars = users.map(function (el) {
  return el.cars;
}).join(',').split(',').filter(function (el) {
  return el;
}).length;
console.log(sumOfCars);
var b = [];
var a = users.reduce(function (b, users) {
  if (users.cars !== undefined) {
    var _iterator = _createForOfIteratorHelper(users.cars),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var value = _step.value;
        b.push(value);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return b;
}, b);
var lengthCars = b.length;
console.log(lengthCars);
function sortByEducation(array) {
  console.log(array.filter(function (el) {
    return el.hasEducation === true;
  }));
  return array.filter(function (el) {
    return el.hasEducation === true;
  });
}
sortByEducation(users);
function sortByAnimals(array) {
  console.log(array.filter(function (el) {
    return el.animals;
  }));
  return array.filter(function (el) {
    return el.animals;
  });
}
sortByAnimals(users);
function getAllCars(array) {
  var b = [];
  var a = array.reduce(function (b, array) {
    if (array.cars !== undefined) {
      var _iterator2 = _createForOfIteratorHelper(array.cars),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var value = _step2.value;
          b.push(value);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    return b;
  }, b);
  console.log(b.join(', '));
  return b.join(', ');
}
getAllCars(users);
var usersInfo = {
  USER1: users[0],
  USER2: users[1],
  USER3: users[2]
};
console.log(usersInfo);
var Book = /*#__PURE__*/function () {
  function Book(name, author, year) {
    _classCallCheck(this, Book);
    this.name = name;
    this.author = author;
    this.year = year;
  }
  _createClass(Book, [{
    key: "setName",
    value: function setName(name) {
      this.name = name;
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
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getAuthor",
    value: function getAuthor() {
      return this.author;
    }
  }, {
    key: "getYear",
    value: function getYear() {
      return this.year;
    }
  }], [{
    key: "info",
    value: function info(book) {
      return "".concat(book.author, "-").concat(book.name, "-").concat(book.year);
    }
  }]);
  return Book;
}();
var book = new Book('Harry Potter', 'J.K.Rowling', 1997);
console.log(book);
var infoAboutBook = new Book('George Orwell', '1984', 1949);
console.log(Book.info(infoAboutBook));
function extractData(obj, key) {
  return obj[key];
}
var object = {
  user: {
    name: "Chris"
  }
};
extractData(object, "user").name;