const express = require('express');
const hbs = require('hbs');

// Get the app by calling express()
var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // res.send('<h1>Hello express</h1>');
  res.render('home.hbs', {
    pageTitle: 'Page',
    welcomeMessage:'Welcome to my website',
    currentYear: new Date().getFullYear()
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'Page',
    currentYear: new Date().getFullYear()
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Uable to handle request!'
  })
})

app.listen(3000, ()=>{
  console.log('Server is up to port 3000');
});
