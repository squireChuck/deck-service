var Deck = require('../model/Deck');

function DeckService() {
    this.decksList = [];

    // require is synchronous - acceptable as long as the service instantiates 
    // reasonably quickly.
    console.log('Getting decks on instantiation...');
    
    this.decksList = require('../data/decks').map(
        function(deckData) {
            return new Deck(deckData.name, deckData.cards);
        });

    console.log('Got decks.');
}

DeckService.prototype.getAllDecks = function() {
    return this.decksList;
};

DeckService.prototype.getDeckByName = function(name) {
    return this.decksList.find(function(deck) {
        if(deck.name === name) {
            return new Deck(deck.name, deck.cards);
        }
    });
};

module.exports = DeckService;