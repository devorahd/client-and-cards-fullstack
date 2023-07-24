const operations = require("../../mongoose/cardOperations");

async function getMyCardByUserAndCardId(req, res) {
  const cardId = req.query.cardId;
  if (!cardId) {
    return res.status(400).json("לא סופק מזהה כרטיסיה");
  }
  const card = await operations.getOneCardByUserIDAndCardID(
    req.userID,
    req.query.cardId
  );
  res.json(card);
}

module.exports = getMyCardByUserAndCardId;
