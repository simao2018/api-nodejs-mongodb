const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { List } = require('./db/models/listmodel');
const { Tache } = require('./db/models/tachemodel');

app.use(bodyParser.json())

app.get('/lists', (req, res) => {
   // Recuperer liste 
    List.find({}).then((list)=>{
        res.send(list);
    });
})

app.post('/lists', (req, res) => {
   // Creer liste
   let title = req.body.title;
   let newList = new List({
       title
   });
   newList.save().then((listDoc)=>{
        res.send(listDoc)   
   })
});

app.patch('/lists/:id', (req, res) => {
    // Mettre a jour liste
});

app.delete('/lists/:id', (req, res) => {
    // Supprimer liste
});




app.listen(3000, ()=>{
    console.log('Serveur demarré sur le port : 3000');
});