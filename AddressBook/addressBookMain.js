"use strict";
exports.__esModule = true;
var addressBookBL = require("./addressBookBL");
var fs = require('fs');
var book = fs.readFileSync('./addressBook.json');
try {
    var myAddressBook = new addressBookBL.addressBook(book);
    myAddressBook.addressBookMgmt();
} catch (e) {
    console.log(e);
}