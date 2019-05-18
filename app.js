const express = require('express');
const app = express();
const port = 3000;

app.listen(3000, function (){
    console.log('Web Notes');
});

//app.get('/',(req, res) => res.send('Web Notes'));

//app.use('/', express.static('views'));

app.get('/', (req, res) => {
    res.render('notes.ejs', { notes: myNotes });
  });

  app.use('/css', express.static('css'));

  const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/notes', (req, res) => { 
    myNotes.push(req.body.note);
    res.redirect('/');
  });

let myNotes = [
    'http is a protocol',
    'http requests have a url, method, header, and body',
    'I like tomatoes',
    'Tomorrow is Sunday',

  ];

