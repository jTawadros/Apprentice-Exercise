const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    message: "My name is Jonathan",
    timestamp: Date.now(),
    verify: "Confirm Deployment using github actions on push (Artifact Registry)!"
  });
});

app.listen(3000);


