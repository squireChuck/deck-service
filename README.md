# deck-service

## Installation
`$ npm install deck-service` 

## Usage

### Node.js
```javascript
var DeckService = require('deck-service').deckService;
var deckService = new DeckService();
console.log(deckService.getAllDecks());
```

### Mounting endpoints to an existing Express app
```javascript
var express = require('express');
var apiController = require('deck-service').deckExpressRouter;

app.use('/myapp', apiController)
```
Test with a GET request to `/myapp/api/v1/decks`
