const operations = require("../../mongoose/cardOperations");

async function getAllCards(req, res) {
  const cards = await operations.getAllCards();
  res.json(cards);
}

module.exports = getAllCards;
