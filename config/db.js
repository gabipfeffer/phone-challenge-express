const mongoose = require('mongoose');
const debug = require('debug')('phone-challenge-server:db');

const DB_LOCAL_URI = process.env.DB_LOCAL_URI;

mongoose
  .connect(DB_LOCAL_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => debug(`Connected to: ${DB_LOCAL_URI}`))
  .catch(err => {
    debug(`Error connecting to DB: ${DB_LOCAL_URI}`);
    debubg(err);
  });
