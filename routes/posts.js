const express = require('express');
const router = express.Router();
const Post = require('../models/post')

router.get('/', (req, res) => {

    res.send('We are on post page');
});

router.get('/specific', (req, res) => {

    res.send('Specific post');
});

/*
router.post('/', (req, res) => {
    console.log(req.body);
})
*/

router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    post.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message: err });
        });
});

module.exports = router;