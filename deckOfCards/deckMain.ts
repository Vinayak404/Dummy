
/**
 * @desc takes no of players as input and distributed the cards among them equally
 * @param deckOfCards class for the whole program
 * @return the cards allotted
 */
import { deckOfCards } from "./deckOfCardsBL";

export { }
class game extends deckOfCards {
    constructor() {
        super(4);
    }
    distributeFor4(noOfCards) {
        let suit: string[] = ['♣️', '💎', ' 💙 ', '♠️']
        let rank: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '🃋', '🃎', '🂽', '🂡']
        let shuffledSuit: string[] = suit.sort(() => Math.random() - .5)
        let shuffledRank: string[] = rank.sort(() => Math.random() - .5)
        let cards: string[] = []
        shuffledRank.forEach(rank => {
            shuffledSuit.forEach(suit => {
                cards.push(rank + ' of ' + suit)
            })
        })
        let shuffledCards = cards.sort(() => Math.random() - .5)
        let players: String[][] = []
        for (var i = 0; i < 4; i++) {
            let player: string[] = []
            for (var j = 0; j < noOfCards; j++) {
                let card = shuffledCards.pop();
                player.push(card)
            } players.push(player)
        }

        // players.push(Player1, Player2, Player3, Player4)
        console.log(players);
    }
}
let play = new game;

play.distributeFor4(9);