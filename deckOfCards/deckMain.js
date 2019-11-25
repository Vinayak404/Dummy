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
var deckOfCardsBL_1 = require("./deckOfCardsBL");
var game = /** @class */ (function (_super) {
    __extends(game, _super);
    function game() {
        return _super.call(this, 4) || this;
    }
    game.prototype.distributeFor4 = function (noOfCards) {
        var suit = ['♣️', '💎', ' 💙 ', '♠️'];
        var rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '🃋', '🃎', '🂽', '🂡'];
        var shuffledSuit = suit.sort(function () { return Math.random() - .5; });
        var shuffledRank = rank.sort(function () { return Math.random() - .5; });
        var cards = [];
        shuffledRank.forEach(function (rank) {
            shuffledSuit.forEach(function (suit) {
                cards.push(rank + ' of ' + suit);
            });
        });
        var shuffledCards = cards.sort(function () { return Math.random() - .5; });
        var players = [];
        for (var i = 0; i < 4; i++) {
            var player = [];
            for (var j = 0; j < noOfCards; j++) {
                var card = shuffledCards.pop();
                player.push(card);
            }
            players.push(player);
        }
        // players.push(Player1, Player2, Player3, Player4)
        console.log(players);
    };
    return game;
}(deckOfCardsBL_1.deckOfCards));
var play = new game;
play.distributeFor4(9);
