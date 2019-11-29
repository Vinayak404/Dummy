import { addressBook } from "./addressBookBL"


declare let require: any
const input = require('readline-sync')
const fs = require('fs')
let AddressBook = JSON.parse(fs.readFileSync('../AddressBook/addressBook.json'))
console.log(AddressBook);

let book = AddressBook.person;
console.log(book);

class myBook extends addressBook {
    book: any
    super(book: any) {
        this.book = book
    }
    searchByName() {
        let personName = input.question("please enter the name of the person:")
        this.book.forEach(element => {
            if (element.Name.includes(personName)) {
                console.log(element);
            }
        });
    }
    printAll() {
        this.book.forEach(ele => {
            console.log(ele);
        })
    }
    addressBookMgmt() {
        let option: number = input.questionInt(`press 1 to add person,
        2 to delete person
        3 to edit person,
        4 to search by name and
        5 to print all the entries:`)
        switch (option) {
            case (1): {
                this.addPerson()
            } break
            case (2): {
                this.deletePerson()
            } break
            case 3: {
                this.editPerson()
            } break
            case 4: {
                this.searchByName()
            } break
            case 5: {
                this.printAll()
            } break
            default: {
                this.printAll()
            } break
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
        }
        this.book.push(person)
        AddressBook.person = this.book;

        console.log(person);
        fs.writeFileSync('../AddressBook/addressBook.json', JSON.stringify(AddressBook))
    }
    deletePerson() {
        let personName = input.question("please enter the name of the person to remove:")
        this.book.forEach(element => {
            if (element.Name == personName) {
                let i = this.book.indexOf(element);
                this.book.splice(i, 1)
            }
        }); AddressBook.person = this.book;
        fs.writeFileSync('../AddressBook/addressBook.json', JSON.stringify(AddressBook))
    }
    editPerson() {
        let personName = input.question("please enter the name of the person to remove:")
        this.book.forEach(element => {
            if (element.Name == personName) {
                element.Name = input.question("please enter your name:")
                element.address = input.question("please enter your address:")
                element.phoneNum = input.questionInt("Enter your phone number:")
                let patt = /^[a-zA-Z]+$/;
                while (!patt.test(element.Name) && !patt.test(element.address) && element.phoneNum != 10) {
                    element.Name = input.question("please enter your valid name:")
                    element.address = input.question("please enter your vaild address:")
                    element.phoneNum = input.questionInt("Enter your vaild phone number:")
                }
            }
        }); AddressBook.person = this.book;
        fs.writeFileSync('../AddressBook/addressBook.json', JSON.stringify(AddressBook))
    }
}
let myAddressBook = new myBook(book)
myAddressBook.addressBookMgmt()
