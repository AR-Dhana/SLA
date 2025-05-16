const express = require('express');
const testRoute = require('./router/testRoute');
const cors = require('cors');

const app = express();
// Middleware
app.use(cors()); // allow React app to talk with backend
app.use(express.json());

const port = 5000;

app.use('/sample', testRoute);

app.listen(port, () => {
    console.log(`server running at ${port}`);
});