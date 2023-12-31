const operations = require("../../mongoose/customerOperations");
const validateRegisterCustomer = require("../../joi/validateRegisterCustomer");

async function registerCustomer(req, res) {
  const { error } = validateRegisterCustomer(req.body);
  if (error) return res.status(400).json(error.details[0].message);

  const retVal = await operations.registerCustomer(req.body);
  if (retVal == null) return res.json("לקוח לא נוסף");
  res.json({ id: retVal._id, name: retVal.name, email: retVal.email });
}

module.exports = registerCustomer;
