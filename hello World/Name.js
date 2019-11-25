"use strict";
var goat = /** @class */ (function () {
    function goat(fname, lname) {
        this.first_name = fname;
        this.last_name = lname;
    }
    goat.prototype.getName = function () {
        var fullname = this.first_name + ' ' + this.last_name;
        return fullname;
    };
    return goat;
}());
var author_name = new goat('hey', 'there');
console.log(author_name.getName());
module.exports = {};
const fs = require('fs')