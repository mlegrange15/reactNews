const express = require('express');
const router = express.Router();

// Article model
const Article = require('../../models/Article');

// GET api/articles Get all Articles
router.get('/', (req, res) => {
    Article.find()
    .sort({ date: -1 })
    .then(articles => res.json(articles))
});

// POST api/articles Post an Article
router.post('/', (req, res) => {
    const newArticle = new Article({
        title: req.body.title,
        date: req.body.date,
        url: req.body.url
    });
    newArticle.save().then(article => res.json(article))
});

// DELETE api/articles/:id Delete an article
router.delete('/:id', (req, res) => {
 Article.findById(req.params.id)
 .then(article => article.remove().then(()=> res.json({ success: true })))
 .catch(error => res.status(404).json({ success: false }))
});


module.exports = router;