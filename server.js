const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./db');
const Response = require('./Response');
const bodyParser = require('body-parser');




const app = express();  

app.use(bodyParser.urlencoded({extended: true}));

// Connect Database
connectDB();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
res.render('index');
});

app.get('/story', (req,res) => {
res.render('story');
}); 

app.get('/location', (req,res) => {
    res.render('location');
});

app.get('/engagementmap', (req,res) => {
    res.render('engagementMap');
});

app.get('/churchmap', (req,res) => {
    res.render('churchMap');
});

app.get('/gallery', (req,res) => {
    res.render('gallery');
});  
  
app.get('/rsvp', (req,res) => {
    res.render('rsvp');
});

app.get('/crew', (req, res) => { 
    res.render('crew')
}) 
 
// -------------

app.post('/rsvp', (req, res) => {
  const name =  req.body.name;
  const text = req.body.textarea
  
  const feedback = new Response({
    name: name,
    textarea: text
  });
   
  
  feedback.save();

    // res.redirect('/'); 
}) 
const port = process.env.PORT;
if(port == null || port == ""){
    port = 3000;
}

app.listen(port, () => {
    console.log(`Server has started successfully`)
}); 