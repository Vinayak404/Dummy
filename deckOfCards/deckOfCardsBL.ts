export { deckOfCards }
abstract class deckOfCards {
    noOfCards: number;
    constructor(public cardsPerPerson: number) {
        this.noOfCards = cardsPerPerson;
    }
    abstract distributeFor4(cardsPerPerson)
}
           