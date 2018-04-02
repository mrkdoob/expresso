const express = require('express');
const app = express();
const cors = require('cors');
const apiRouter = require('./api/api');
const bodyParser = require('body-parser');

app.use(express.static('public'));

const PORT = process.env.PORT || 4000;
// Require body-parser (to receive post data from clients)

app.use(bodyParser.json());

app.use(cors());

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
