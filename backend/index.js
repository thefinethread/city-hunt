const express = require('express');
require('dotenv').config();
const path = require('path');
const appRouter = require('./routes/app.route');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', appRouter);

const buildPath = path.join(__dirname, '../frontend', 'build');

app.use(express.static(buildPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
