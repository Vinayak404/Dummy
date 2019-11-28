
/**
 * @desc takes patient details as input and directs/ sets appointment with the available and associated doctor
 * @param //addressBook class for the whole program
 * @param addressBookMgmt lets user use varioud addressbook functions
 */
export default addressBook
declare let require: any
const fs = require('fs')
const input = require('readline-sync')
let jsonbook = require('../AddressBook/addressBook.json')
let book = JSON.parse(jsonbook)

export class addressBook {
    book: any
    constructor(book: any) {
        this.book = book
    }

    addressBookMgmt() {
        let option: number = input.question(`press 1 to add person,
        press 2 to delete person
        , "press 3 to edit person,`)
        switch (option) {
            case 1: {
                this.addPerson()
            }
            case 2: {
                this.deletePerson()
            }
            case 3: {
                this.editPerson()
            }
        }
    }
    addPerson() {
        let person: any = {};
        person.Name = input.question("please enter your name:")
        person.address = input.question("please enter your address:")
        person.phoneNum = input.question("Enter your phone number:")
        let patt = /^[a-zA-Z1-9]+$/;
        while (!patt.test(person.Name) && !patt.test(person.address) && person.phoneNum != 10) {
            person.Name = input.question("please enter your valid name:")
            person.address = input.question("please enter your vaild address:")
            person.phoneNum = input.questionInt("Enter your vaild phone number:")
            this.book.person.push(person)
            fs.writeFileSync('../AddressBook/addressBook.json', JSON.stringify(book))

        }
    }
    deletePerson() {
        let personName = input.question("please enter the name of the person to remove:")
        this.book.forEach(element => {
            if (element.Name == personName) {
                let i = this.book.person.indexOf(element);
                this.book.person.splice(i, 1)
            }
        }); fs.writeFileSync('../AddressBook/addressBook.json', JSON.stringify(book))
    }
    editPerson() {
        let personName = input.question("please enter the name of the person to remove:")
        this.book.forEach(element => {
            if (element.Name == personName) {
                element.Name = input.question("please enter your name:")
                element.address = input.question("please enter your address:")
                element.phoneNum = input.questionInt("Enter your phone number:")
                let patt = /^[a-zA-Z1-9]+$/;
                while (!patt.test(element.Name) && !patt.test(element.address) && element.phoneNum != 10) {
                    element.Name = input.question("please enter your valid name:")
                    element.address = input.question("please enter your vaild address:")
                    element.phoneNum = input.questionInt("Enter your vaild phone number:")
                }

            }
        }); fs.writeFileSync('../AddressBook/addressBook.json', JSON.stringify(book))
    }
}
