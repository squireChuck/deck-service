var express = require('express');
var router = express.Router();

var DeckService = require('../services/DeckService');
var deckService = new DeckService();

// GET /decks
//  Endpoint to get all decks that are available.
router.get('/api/v1/decks', function(req, res) { 
    console.log("In the GET /api/v1/decks endpoint");

    res.send(deckService.getAllDecks());
});

// GET /decks/{name} 
//  Endpoint to get a single deck by its name.
router.get('/api/v1/decks/:name', function(req, res) { 
    console.log("In the GET /api/v1/decks/name endpoint");

    res.send(deckService.getDeckByName(req.params.name));
});

module.exports = router;