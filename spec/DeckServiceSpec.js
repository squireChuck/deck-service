describe("DeckService", function() {
    var DeckService = require('../services/DeckService');
    var deckService = new DeckService();

    it("returns at least one 52 card deck.", function() {
        var decks = deckService.getAllDecks();

        expect(decks.length).toBeGreaterThan(0);
        expect(
            decks.some(
                function(deck) {
                    return deck.cards.length == 52;
                }
            )).toBe(true);
    });

    it("returns a deck by exact name.", function() {
        expect(deckService.getDeckByName('Basic Deck')).toBeTruthy();
        expect(deckService.getDeckByName('basicdeck')).toBeFalsy();
    });
});