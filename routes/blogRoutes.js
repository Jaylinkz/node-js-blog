const express = require('express');
const blogController = require('../controllers/blogController');



const router = express.Router();


router.get('/blogs', blogController.blog_index);
router.post('/blogs', blogController.create_blog);
router.get('/blogs/create', blogController.blog_create_get);
router.get('/blogs/:id', blogController.Find_blog);
router.delete('/blogs/:id', blogController.delete_blog);




module.exports = router;