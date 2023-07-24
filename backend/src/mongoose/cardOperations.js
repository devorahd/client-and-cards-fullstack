const cardModel = require('./cardModel');

//פונקציה שמקבלת פרטי כרטיסיה ומנסה לשמור בבסיס הנתונים
//מחזירה את פרטי הכרטיסיה במידה ונשמר בהצלחה
//מחזירה null  במידה ולא נשמרה הכרטיסיה בבסיס הנתונים
async function createCardInMongoDB(cardDetails) {
  //await says that the code waits for this code line to work and will only continue the rest of the code afterwards.
  //await is instead of .then().   can use try and catch for .catch(). like this:
  try {
    const createCardInDb = await new cardModel(cardDetails).save();
    //האובייקט נשמר בבסיס הנתונים
    return createCardInDb;
  } catch {
    //האובייקט לא נשמר בבסיס הנתונים
    return null;
  }
}

// new cardModel(cardDetails).save();
// can also write this:
// cardModel.create(cardDetails).save();

async function getAllCards() {
  try {
    const cards = await cardModel.find();
    return cards;
  } catch {
    return null;
  }
}

async function getOneCardByUserIDAndCardID(userId, cardId) {
  try {
    const oneCard = await cardModel.find({
      userId: userId,
      _id: cardId,
    });
    return oneCard;
  } catch {
    return null;
  }
}

async function deleteOneCard(cardid, userid) {
  try {
    return await cardModel.findOneAndDelete({
      _id: cardid,
      userId: userid,
    });
  } catch {
    return null;
  }
}

async function updateOneCard(cardid, userid, cardUpdatedData) {
  try {
    const filter = {
      _id: cardid,
      userId: userid,
    };
    return await cardModel.findOneAndUpdate(filter, cardUpdatedData);
  } catch {
    return null;
  }
}

module.exports = {
  createCardInMongoDB,
  getAllCards,
  getOneCardByUserIDAndCardID,
  deleteOneCard,
  updateOneCard,
};
