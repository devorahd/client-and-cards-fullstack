const operations = require("../../mongoose/cardOperations");

async function deleteCard(req, res) {
  const cardid = req.query.cardid;
  if (cardid) {
    const retVal = await operations.deleteOneCard(cardid, req.userID);
    if (retVal != null) return res.json("כרטיסיה נמחקה");
  }
  res.status(500).json("שים לב, כרטיסיה לא נמחקה");
}

module.exports = deleteCard;
