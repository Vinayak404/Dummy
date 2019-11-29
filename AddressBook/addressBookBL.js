"use strict";
exports.__esModule = true;
var fs = require('fs');
var input = require('readline-sync');
var AddressBook = JSON.parse(fs.readFileSync('../AddressBook/addressBook.json'));
var book = AddressBook.person;
var addressBook = /** @class */ (function () {
    function addressBook(book) {
        this.book = book;
    }
    return addressBook;
}());
exports.addressBook = addressBook;
