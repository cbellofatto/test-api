const express = require('express');
const app = express();
const pieceRouter = require('./routes/pieces')
app.get('/', (req, res) => {
  res.send("Hello world!");
})
app.use('/pieces', pieceRouter);
const port = process.env.PORT || 5000;
app.listen(port, () => `Server running on port ${port} 🔥`);