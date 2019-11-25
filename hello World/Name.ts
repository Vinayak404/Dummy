export ={}
class goat {
    first_name: string;
    last_name: string;

    constructor(fname: string, lname: string) {
        this.first_name = fname;
        this.last_name = lname;
    }
    getName(): string {
        var fullname: string = this.first_name + ' ' + this.last_name;
        return fullname;
    }
}

var author_name = new goat('hey', 'there')
console.log(author_name.getName())