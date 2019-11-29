"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var addressBookBL_1 = require("./addressBookBL");
var input = require('readline-sync');
var fs = require('fs');
var AddressBook = JSON.parse(fs.readFileSync('../AddressBook/addressBook.json'));
console.log(AddressBook);
var book = AddressBook.person;
console.log(book);
var myBook = /** @class */ (function (_super) {
    __extends(myBook, _super);
    function myBook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    myBook.prototype["super"] = function (book) {
        this.book = book;
    };
    myBook.prototype.searchByName = function () {
        var personName = input.question("please enter the name of the person:");
        this.book.forEach(function (element) {
            if (element.Name.includes(personName)) {
                console.log(element);
            }
        });
    };
    myBook.prototype.printAll = function () {
        this.book.forEach(function (ele) {
            console.log(ele);
        });
    };
    myBook.prototype.addressBookMgmt = function () {
        var option = input.questionInt("press 1 to add person,\n        2 to delete person\n        3 to edit person,\n        4 to search by name and\n        5 to print all the entries:");
        switch (option) {
            case (1):
                {
                    this.addPerson();
                }
                break;
            case (2):
                {
                    this.deletePerson();
                }
                break;
            case 3:
                {
                    this.editPerson();
                }
                break;
            case 4:
                {
                    this.searchByName();
                }
                break;
            case 5:
                {
                    this.printAll();
                }
                break;
            default:
                {
                    this.printAll();
                }
                break;
        }
    };
    myBook.prototype.addPerson = function () {
        var person = {};
        person.Name = input.question("please enter your name:");
        person.address = input.question("please enter your address:");
        person.phoneNum = input.question("Enter your phone number:");
        var patt = /^[a-zA-Z1-9]+$/;
        while (!patt.test(person.Name) && !patt.test(person.address) && person.phoneNum != 10) {
            person.Name = input.question("please enter your valid name:");
            person.address = input.question("please enter your vaild address:");
            person.phoneNum = input.questionInt("Enter your vaild phone number:");
        }
        this.book.push(person);
        AddressBook.person = this.book;
        console.log(person);
        fs.writeFileSync('../AddressBook/addressBook.json', JSON.stringify(AddressBook));
    };
    myBook.prototype.deletePerson = function () {
        var _this = this;
        var personName = input.question("please enter the name of the person to remove:");
        this.book.forEach(function (element) {
            if (element.Name == personName) {
                var i = _this.book.indexOf(element);
                _this.book.splice(i, 1);
            }
        });
        AddressBook.person = this.book;
        fs.writeFileSync('../AddressBook/addressBook.json', JSON.stringify(AddressBook));
    };
    myBook.prototype.editPerson = function () {
        var personName = input.question("please enter the name of the person to remove:");
        this.book.forEach(function (element) {
            if (element.Name == personName) {
                element.Name = input.question("please enter your name:");
                element.address = input.question("please enter your address:");
                element.phoneNum = input.questionInt("Enter your phone number:");
                var patt = /^[a-zA-Z]+$/;
                while (!patt.test(element.Name) && !patt.test(element.address) && element.phoneNum != 10) {
                    element.Name = input.question("please enter your valid name:");
                    element.address = input.question("please enter your vaild address:");
                    element.phoneNum = input.questionInt("Enter your vaild phone number:");
                }
            }
        });
        AddressBook.person = this.book;
        fs.writeFileSync('../AddressBook/addressBook.json', JSON.stringify(AddressBook));
    };
    return myBook;
}(addressBookBL_1.addressBook));
var myAddressBook = new myBook(book);
myAddressBook.addressBookMgmt();
