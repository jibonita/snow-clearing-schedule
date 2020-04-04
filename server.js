const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/dist/snow-clearing-schedule')));

1({ secret: 'snow-clearing-app-super-shared-secret' }).unless({ path: ['/api/auth'] }));

app.get('/*', function (req, res) {
   res.sendFile(
      path.join(__dirname + '/dist/snow-clearing-schedule/index.html')
   );
});

const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
   console.log(`Server running on port ${port}`);
});
