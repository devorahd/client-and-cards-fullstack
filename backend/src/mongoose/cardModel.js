const mongoose = require("mongoose");

const businessCardSchema = mongoose.Schema({
  businesName: String,
  businesDescription: String,
  businesAddress: String,
  businesPhone: String,
  businesImage: String,
});

//the database will have a collection named card and that collection will have alot of items that have businessCardSchema.
//with businessCardModel object i can use different mongodb functions and work with the DB.
const businessCardModel = mongoose.model("card", businessCardSchema);

module.exports = businessCardModel;
