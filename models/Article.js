const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema
const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    url: {
        type: String,
        required: true
    }
});

module.exports = Article = mongoose.model('article', ArticleSchema);