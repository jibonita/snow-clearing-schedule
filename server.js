const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');

const auth = require('./server/routes/auth');

app.use(cors({ origin: true, credentials: true }));

app.use(express.json());

app.use(express.static(path.join(__dirname, '/dist/snow-clearing-schedule')));


app.use('/auth', auth);

// ({ secret: 'snow-clearing-app-super-shared-secret' }).unless({ path: ['/api/auth'] });

app.get('/*', function (req, res) {
   res.sendFile(
      path.join(__dirname + '/dist/snow-clearing-schedule/index.html')
   );
});

const port = process.env.PORT || 3000;

mongoose.connect('mongodb://snow:snow1cleaning@ds251827.mlab.com:51827/snow-clearing-schedule-db',
   { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
      if (!err) {
         console.log('Connected to mongo');
      }
   });

app.listen(port, (req, res) => {
   console.log(`Server running on port ${port}`);
});
