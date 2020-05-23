const fs = require('fs');

const path = require('path');

const { animals } = require('./data/animals');

const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

const apiRoutes = require('./routes/apiRoutes');

const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// to connect css and all other middleware files within the public folder
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

app.use('/api', apiRoutes);

app.use('/', htmlRoutes);