const express = require('express');
const morgan = require('morgan');

const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
//express app
const app = express();

//db connection

const dbUri = 'mongodb+srv://Jay-node:jay20011968bawa@jaybawa.dlgafqh.mongodb.net/Jay-Node?retryWrites=true&w=majority';

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));
//setting view engine

app.set('view engine', 'ejs');

//listen for requests on port 3000

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// app.get('/add-blog', (req, res) => {


//     const blog = new Blog({

//         title: 'new Blog',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });

//     blog.save()
//         .then((result) => {
//             res.send(result);
//         }).catch((err) => {
//             console.log(err);
//         });

// });
// app.get('/get-blogs', (req, res) => {

//     Blog.find().
//     then((result) => {
//         res.send(result);
//     }).catch((err) => {
//         console.log(err);
//     });


// });

// app.get('/single-blog', (req, res) => {

//     Blog.findById('6365f2ede5f41e1da538672a').
//     then((result) => {
//         res.send(result);
//     }).catch((err) => {
//         console.log(err);
//     });


// });



app.get('/', (req, res) => {


    res.redirect('/blogs');

});

app.get('/about', (req, res) => {

    res.render('about', { title: 'about-us' });
});

app.use(blogRoutes);

app.use((req, res) => {
    res.status(404).render('404', { title: 'page not found' });

});