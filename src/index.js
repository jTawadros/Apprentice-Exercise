const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const responseObject = {
    message: "My name is Jonathan",
    timestamp: Date.now()
    minified: () => true,
  };

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(responseObject)); // Minified JSON response
});

app.listen(3000);


