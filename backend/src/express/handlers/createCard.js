/** @type {import("express").RequestHandler} */

/* const validateCreateCard = require("../../joi/validateCreateCard");
const operations = require("../../mongoose/cardOperations");

async function createCard(req, res) {
  if (!req.headers.token)
    return res
      .status(401)
      .json({ meg: "you are not authorized to go to this site" });

  const result = validateCreateCard(req.body);
  if (result.error)
    return res.status(400).json(result.error.details[0].message);

  const cardFromDB = await operations.createCardInMongoDB(req.body);
  if (cardFromDB == null) {
    return res.status(500).json("שגיאה כללית כרטיסיה לא נשמרה בבסיס הנתונים");
  }
  res.json(cardFromDB);
}

module.exports = createCard; */

const validateCreateCard = require("../../joi/validateCreateCard");
const operations = require("../../mongoose/cardOperations");

async function createCard(req, response) {
  const result = validateCreateCard(req.body);
  if (result.error)
    return response.status(400).json(result.error.details[0].message);

  req.body.userId = req.userID;
  const cardFromDB = await operations.createCardInMongoDB(req.body);
  if (cardFromDB == null) {
    return response
      .status(500)
      .json("שגיאה כללית כרטיסיה לא נשמרה בבסיס הנתונים");
  }
  response.json(cardFromDB);
}

module.exports = createCard;
