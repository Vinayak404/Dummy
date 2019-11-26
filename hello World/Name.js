// "use strict";
// var goat = /** @class */ (function () {
//     function goat(fname, lname) {
//         this.first_name = fname;
//         this.last_name = lname;
//     }
//     goat.prototype.getName = function () {
//         var fullname = this.first_name + ' ' + this.last_name;
//         return fullname;
//     };
//     return goat;
// }());
// var author_name = new goat('hey', 'there');
// console.log(author_name.getName());
// module.exports = {};
// const fs = require('fs')
let a = [57, 46, 648, 46, 86, 786, 786, 568]
console.log(a.splice(2, 0));
console.log(a);