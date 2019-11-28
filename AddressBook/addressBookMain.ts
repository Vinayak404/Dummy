import addressBookBL = require("./addressBookBL")

declare let require: any
const fs = require('fs')
let book = fs.readFileSync('./addressBook.json')
try {
    let myAddressBook = new addressBookBL.addressBook(book)
    myAddressBook.addressBookMgmt()
} catch (e) {
    console.log(e);

}