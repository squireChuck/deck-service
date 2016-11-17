function Deck(deckName, cardsInDeck) {
    if(!(this instanceof Deck)) {
        return new Deck(deckName, cardsInDeck);
    }
    
    this.name = deckName;
    this.cards = cardsInDeck;
}

/*
 * Implementation from Stack Overflow "How can i shuffle an array in JavaScript? [duplicate]"
 *      - http://stackoverflow.com/a/6274381/6445206
 * 
 * Possible alternate implementation - Fisher–Yates Shuffle
 *      - Check out npm package - knuth-shuffle
 * 
 */
Deck.prototype.shuffle = function() {
    for (let i = this.cards.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [this.cards[i - 1], this.cards[j]] = [this.cards[j], this.cards[i - 1]];
    }
};

Deck.prototype.toJSON = function() {
    return { 
        name: this.name,
        cards: this.cards 
    };
};

module.exports = Deck;