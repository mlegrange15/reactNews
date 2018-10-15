const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const articles = require('./routes/api/articles')

const app = express();

//Middleware
app.use(bodyParser.json());

// DB config
const db = require ('./config/keys').mongoURI;

// Mongo Connection
mongoose.connect(db)
    .then(() => console.log('MongoDB is Connected!'))
    .catch( error => console.log(error));

// Routes
app.use('/api/articles' , articles);

// Serve static assests if in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

    const port = process.env.PORT || 5000;

    app.listen (port, () => console.log(`Server started on port ${port}`));