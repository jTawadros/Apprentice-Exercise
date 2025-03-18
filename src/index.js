const express = require('express');
const app = express();

app.set('port', process.env.PORT || 80);
app.get('/', (req, res) => {
  res.json({
      message: "My name is Jonathan",
      timestamp: Date.now()
    });
});

app.listen(app.get('port'));


