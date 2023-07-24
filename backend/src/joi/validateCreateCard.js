const joi = require('joi');

const myCardObject = {
  businesName: joi.string().required().min(5).max(255),
  businesDescription: joi.string().required().min(20).max(255),
  businesAddress: joi.string().required().min(20).max(255),
  businesPhone: joi.string().required().min(9).max(10),
  businesImage: joi.string().required().min(20).max(500),
};

const validateCardByJoi = joi.object(myCardObject);

function validateCard(cardDetails) {
  return validateCardByJoi.validate(cardDetails);
}

module.exports = validateCard;
