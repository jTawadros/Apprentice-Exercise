const express = require('express');
const app = express();

let reqCount = 0;
app.get('/', (req, res) => {
  reqCount++;
  if (reqCount === 7) {
    return res.staus(200).send('test');
  }
  res.json({
    message: "My name is Jonathan",
    timestamp: Date.now()
  });
});

app.listen(3000);


