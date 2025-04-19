const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Sikeres API hívás!' });
});

app.post('/api', (req, res) => {
  const data = req.body;
  console.log(data);
  res.json({ message: 'Sikeres API hívás!' });
});

app.listen(port, () => {
  console.log(`A szerver fut a következő porton: http://localhost:${port}`);
});
