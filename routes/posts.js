const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const { json } = require('body-parser');
const { Router } = require('express');


router.get('/', async(req, res) => {

    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (e) {
        res.json({ message: e })
    }
});

router.get('/specific', (req, res) => {

    res.send('Specific post');
});

router.post('/', async(req, res) => {

    const post = new Post({
        //id: req.body.id,
        title: req.body.title,
        description: req.body.description
    });

    try {
        const postSaved = await post.save();
        res.json(postSaved);
    } catch (err) {
        res.json({ message: err });
    }
});

//GET BY POST ID
router.get('/:postId', async(req, res) => {

    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (e) {
        res.json({ message: e });
    }

});

//DELETING POST BY ID to jest moje
router.delete('/:postId', async(req, res) => {

    try {
        const deletePost = await Post.deleteOne(req.params.postId);
        res.json(deletePost);
    } catch (e) {
        res.json({ message: e });
    }
});

//DELETING POST BY ID
router.delete('/:postId', async(req, res) => {

    try {
        const deletePost = await Post.remove({ _id: req.params.postId });
        res.json(deletePost);
    } catch (e) {
        res.json({ message: e });
    }
});

//UPDATING 
router.patch('/:postId', async(req, res) => {

    try {
        const updatedPost = await Post.updateOne({ _id: req.params.postId }, { $set: { title: "Updated title" } }, );
        res.json(updatedPost);
    } catch (e) {
        res.json({ message: e });
    }
});



module.exports = router;