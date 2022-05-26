const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql');

require('dotenv').config();



const app = express();
const port = process.env.PORT || 5000;

//parsing middleware

app.use(bodyParser.urlencoded({ extended: false }));

//parse application/json
app.use(bodyParser.json());

//static files 
app.use(express.static('public'));

//templating engine uses view and  layout folder as a default
app.engine('hbs', exphbs.engine( {extname: '.hbs' }));
app.set('view engine', 'hbs');

//router
app.get('', (req, res) => {
    res.render('home');
});

app.get('')


app.listen(port, () => console.log(`listening on port ${port}`));
