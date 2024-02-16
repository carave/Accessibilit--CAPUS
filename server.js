const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur http://localhost:${port}`);
});