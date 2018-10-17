const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema
const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

module.exports = Article = mongoose.model('article', ArticleSchema);