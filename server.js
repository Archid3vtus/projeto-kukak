const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Routes
const correios = require('./routes/api/correios');

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routes
app.use('/api/correios', correios);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});