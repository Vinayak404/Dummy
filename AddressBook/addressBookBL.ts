
/**
 * @desc takes patient details as input and directs/ sets appointment with the available and associated doctor
 * @param //addressBook class for the whole program
 * @param addressBookMgmt lets user use varioud addressbook functions
 */
export { addressBook }
declare let require: any
const fs = require('fs')
const input = require('readline-sync')
let AddressBook = JSON.parse(fs.readFileSync('../AddressBook/addressBook.json'))
let book = AddressBook.person;

class addressBook {
    book: any
    constructor(book: any) {
        this.book = book
    }

}

