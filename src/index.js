const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
      message: "My name is Jonathan",
      timestamp: Date.now()
    }));
});
app.listen(3000);


