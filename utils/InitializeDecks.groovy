import groovy.json.JsonOutput

/**
 * Created by Charlie on 11/16/2016.
 *
 * Initialize decks.json with a basic 52 card deck.
 *
 * On a Groovy-installed machine, run in command line with: groovy InitializeDecks.groovy
 *
 * Groovy version 2.4.7
 * Java JDK 1.8.0_92
 */

List cardSuits = ['hearts', 'diamonds', 'clubs', 'spades']
List cardRanks = [2..10, 'J', 'Q', 'K', 'A'].flatten().collect { it.toString() }

List deck = GroovyCollections.combinations(cardSuits, cardRanks)

// Ensure the deck contains desired properties
assert deck.size() == 52

// 13 cards per suit
cardSuits.each { suit ->
    assert deck.findAll{ card ->
        suit.equalsIgnoreCase(card[0]) }.size() == 13
}
// 4 cards per rank.
cardRanks.each { rank ->
    assert deck.findAll { card ->
        rank.equalsIgnoreCase(card[1]) }.size() == 4
}

// Each card is unique.
deck.each { searchCard ->
    assert deck.findAll { card ->
        searchCard[0] == card[0] && searchCard[1] == card[1]}.size() == 1
}

// Create deck
def json = JsonOutput.toJson([
        [ "name" : "Basic Deck",
          "cards" : deck.collect {[suit: it[0], rank: it[1]]} ]
])

new File("decks.json").text = JsonOutput.prettyPrint(json)

println "Done!"