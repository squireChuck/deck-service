# deck-service

## Installation
`$ npm install` 

## Usage

### Node.js
```javascript
var DeckService = require('deck-service').deckService;
var deckService = new DeckService();
console.log(deckService.getAllDecks());

var basicDeck = deckService.getDeckByName("Basic Deck");
console.log(basicDeck.cards);
basicDeck.shuffle();
console.log(basicDeck.cards);
```

### Mounting endpoints to an existing Express app
```javascript
var express = require('express');
var apiController = require('deck-service').deckExpressRouter;

app.use('/myapp', apiController);
```
Test with a GET request to `/myapp/api/v1/decks`

### Test
To run the tests in the spec folder: 
`$ npm test`
