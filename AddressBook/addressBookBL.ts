
/**
 * @desc takes patient details as input and directs/ sets appointment with the available and associated doctor
 * @param //addressBook class for the whole program
 * @param addressBookMgmt lets user use varioud addressbook functions
 */
export ={ addressbook }
declare let require: any
const input = require('readline-sync')

class addressBook {
    book: any[]
    constructor(book: any[]) {
        this.book = book
    }
    addressBookMgmt() {
        let option: number = input.question(`press 1 to add person,
        press 2 to delete person
        , "press 3 to edit person,`)
        switch (option) {
            case 1: {
                this.addPerson
            }
            case 2: {
                this.deletePerson
            }
            case 3: {
                this.editPerson
            }
        }
    }
    addPerson() {
        let person: any = {};
        person.name = input.question("please enter your name:")
        person.address = input.question("please enter your address:")
        person.phoneNum = input.question("Enter your phone number:")
        this.book.push(person)
    }
    deletePerson() {
        let personName = input.question("please enter the name of the person to remove:")
        this.book.forEach(element => {
            if (element.Name == personName) {
                let i = this.book.indexOf(element);
                this.book.splice(i, 1)
            }
        });
    }
    // editPerson() {

    // }
}
