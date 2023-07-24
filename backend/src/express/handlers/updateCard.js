const operations = require("../../mongoose/cardOperations");

async function updateCard(req, res) {
  const cardID = req.query.cardid;
  const userID = req.userID;
  if (!cardID) {
    res.status(400).json("לא סופק מזהה כרטיסיה");
  }
  const result = await operations.updateOneCard(cardID, userID, req.body);
  //עדיין יש כאן תקלה שאם שולחים בודי ריק או מלל שאין לו משמעות עדיין כתוב שהכרטיסיה עודכנה בהצלחה למרות שלא עודכנה
  if (result != null) return res.json("כרטיסיה עודכנה בהצלחה");
  return res.status(500).json("תקלה בשרת. לא עודכן");
}

module.exports = updateCard;
