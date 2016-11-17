// Verify properties of a basic deck. 
describe("A basic card deck", function() {
    var DeckService = require('../services/DeckService');
    var deckService = new DeckService();
    var basicDeck = deckService.getDeckByName("basicDeck");

    it("has 52 cards.", function() {
        expect(basicDeck.cards.length).toBe(52);
    });

    describe("has 4 suits", function() {
        var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 
                     'Q', 'K', 'A'];

        var suits = ['hearts', 'clubs', 'diamonds', 'spades'];

        suits.forEach(function(suit) {
            it("- " + suit + " with ranks 2 thru 10, J, Q, K, and A", function() {
                var ranksInSuit = basicDeck.cards.filter(function(card) {
                    return card.suit === 'hearts';
                }).map(function(card) {
                    return card.rank;
                });

                expect(ranksInSuit.length).toBe(13);
                
                ranks.forEach(function(rank) {
                    expect(ranksInSuit.includes(rank)).toBe(true)
                });
            });
        });
    });
});

describe("A deck", function() {
    var DeckService = require('../services/DeckService');
    var deckService = new DeckService();
    var basicDeck = deckService.getDeckByName("basicDeck");

    it("has a name.", function(){
        expect(basicDeck).toBeTruthy();
    });

    it("has cards.", function() {
        expect(basicDeck.cards.length).toBeGreaterThan(0);
    });

    it("can be shuffled.", function() {
        pending("Test pending investigation on testing randomness.");
        expect(true).toBe(false);
    });
});