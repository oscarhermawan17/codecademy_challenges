const express = require('express')
const quotesRouter = express.Router()

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

//get all quotes
quotesRouter.get('/', (req, res, next) => {
  if(req.query.hasOwnProperty('person')) {
    const allJustQuotes = quotes.filter(quote => quote.person === req.query.person)
      .map(quote => quote.quote)

    res.send({
      quotes: allJustQuotes
    })
  } else {
    const allJustQuotes = quotes.map(quote => quote.quote)
    res.send({
      quotes: allJustQuotes
    })
  }
})

//get random
quotesRouter.get('/random', (req, res, next) => {
  const randomQuotes = getRandomElement(quotes)
  res.send({  quote:randomQuotes })
})

//get quotes by person
quotesRouter.get('/person/:personName', (req, res, next) => {
  const getQuotesByPerson = quotes.filter(quote => quote.person.toLowerCase() === req.params.personName.toLowerCase())
  if(getQuotesByPerson.length > 0) {
    res.send(getQuotesByPerson)
  } else {
    res.status(404).send()
  }
})


// post a new quotes
quotesRouter.post('/', (req, res, next) => {
  const { quote, person } = req.body
  if(quote && person) {
    quotes.push({
      quote, person
    })
    res.status(201).send({
      quote: {
        quote, person
      }
    })
  } else {
    res.status(400).send('Need quote and person data')
  }
})

module.exports = quotesRouter