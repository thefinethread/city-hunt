const express = require('express');
const appRouter = require('./routes/app.route');

const app = express();

const PORT = 5000;

app.use('/api', appRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
