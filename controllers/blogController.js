const Blog = require('../models/blog');

const blog_index = (req, res) => {
    Blog.find().sort({
        createdAt: -1
    }).then((result) => {
        res.render('index', { title: 'all blogs', blogs: result })
    }).catch((err) => {
        console.log(err);
    });
}
const create_blog = (req, res) => {
    const blog = new Blog(req.body);
    blog.save().then(res.redirect('/blogs')).catch((err) => {
        console.log(err)
    });

}

const Find_blog = (req, res) => {
    const id = req.params.id;
    Blog.findById(id).
    then((result) => {
        res.render('details', { blog: result, title: 'blog details' });
    }).catch((err) => {
        res.status(404).render('404', { title: 'page not found' });
    })
}

const delete_blog = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id).then((result) => {
        res.json({ redirect: '/blogs' })
    }).catch(err => {
        res.status(404).render('404', { title: 'page not found' });;
    });
}
const blog_create_get = (req, res) => {


    res.render('create', { title: 'create new blog' });


}


module.exports = {
    blog_index,
    create_blog,
    Find_blog,
    delete_blog,
    blog_create_get
}