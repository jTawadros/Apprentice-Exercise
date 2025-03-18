const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
      message: "My name is Jonathan",
      timestamp: Date.now()
    });
});

app.listen(80, "0.0.0.0");


