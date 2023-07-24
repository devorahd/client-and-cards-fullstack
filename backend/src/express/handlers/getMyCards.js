const cardOperations = require("../../mongoose/customerOperations");

async function getMyCards(req, res) {
  const userCards = await cardOperations.getCardsByUserId(req.userID);
  res.json(userCards);
}

module.exports = getMyCards;
