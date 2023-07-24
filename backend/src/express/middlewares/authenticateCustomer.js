const customerOperation = require('../../mongoose/customerOperations');
const jsonwebtoken = require('jsonwebtoken');

async function authenticateCustomer(req, res, next) {
  const token = req.headers.token;
  if (!token) return res.status(401).json({ meg: 'לא מורשה. לא סופק טוקן' });

  try {
    const data = jsonwebtoken.verify(token, 'mykey');
    req.userID = data.customerid;
    next();
  } catch {
    return res.status(401).json({ meg: 'טוקן לא חוקי' });
  }

  /* const customerFromDB = await customerOperation.signInCustomer(
    email,
    password
  );
  if (customerFromDB == null)
    return res
      .status(401)
      .json({ meg: "אימייל וסיסמה לא נמצאו בבסיס הנתונים" }); 

  req.userID = customerFromDB._id;
  next();
  */
}

module.exports = authenticateCustomer;
