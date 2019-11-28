"use strict";
exports.__esModule = true;
/**
 * @desc takes patient details as input and directs/ sets appointment with the available and associated doctor
 * @param //addressBook class for the whole program
 * @param addressBookMgmt lets user use varioud addressbook functions
 */
exports["default"] = addressBook;
var fs = require('fs');
var input = require('readline-sync');
var jsonbook = require('../AddressBook/addressBook.json');
var book = JSON.parse(jsonbook);
var addressBook = /** @class */ (function () {
    function addressBook(book) {
        this.book = book;
    }
    addressBook.prototype.addressBookMgmt = function () {
        var option = input.question("press 1 to add person,\n        press 2 to delete person\n        , \"press 3 to edit person,");
        switch (option) {
            case 1: {
                this.addPerson();
            }
            case 2: {
                this.deletePerson();
            }
            case 3: {
                this.editPerson();
            }
        }
    };
    addressBook.prototype.addPerson = function () {
        var person = {};
        person.Name = input.question("please enter your name:");
        person.address = input.question("please enter your address:");
        person.phoneNum = input.question("Enter your phone number:");
        var patt = /^[a-zA-Z1-9]+$/;
        while (!patt.test(person.Name) && !patt.test(person.address) && person.phoneNum != 10) {
            person.Name = input.question("please enter your valid name:");
            person.address = input.question("please enter your vaild address:");
            person.phoneNum = input.questionInt("Enter your vaild phone number:");
            this.book.person.push(person);
            fs.writeFileSync('../AddressBook/addressBook.json', JSON.stringify(book));
        }
    };
    addressBook.prototype.deletePerson = function () {
        var _this = this;
        var personName = input.question("please enter the name of the person to remove:");
        this.book.forEach(function (element) {
            if (element.Name == personName) {
                var i = _this.book.person.indexOf(element);
                _this.book.person.splice(i, 1);
            }
        });
        fs.writeFileSync('../AddressBook/addressBook.json', JSON.stringify(book));
    };
    addressBook.prototype.editPerson = function () {
        var personName = input.question("please enter the name of the person to remove:");
        this.book.forEach(function (element) {
            if (element.Name == personName) {
                element.Name = input.question("please enter your name:");
                element.address = input.question("please enter your address:");
                element.phoneNum = input.questionInt("Enter your phone number:");
                var patt = /^[a-zA-Z1-9]+$/;
                while (!patt.test(element.Name) && !patt.test(element.address) && element.phoneNum != 10) {
                    element.Name = input.question("please enter your valid name:");
                    element.address = input.question("please enter your vaild address:");
                    element.phoneNum = input.questionInt("Enter your vaild phone number:");
                }
            }
        });
        fs.writeFileSync('../AddressBook/addressBook.json', JSON.stringify(book));
    };
    return addressBook;
}());
exports.addressBook = addressBook;
