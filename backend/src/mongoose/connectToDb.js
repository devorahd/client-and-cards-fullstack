const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/CustomersAndCardsProject')
  .then(() => console.log('Connected to mongo DB'))
  .catch((err) => console.log('Problems to connect to mongo db'));
