import { addressBook } from "./addressBookBL"


declare let require: any
const fs = require('fs')
let book = fs.readFileSync('./addressBook.json')
try {
    let myAddressBook = new addressBook(book)
    myAddressBook.addressBookMgmt()
} catch (e) {
    console.log(e);
}