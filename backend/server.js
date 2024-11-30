const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 4000;


//IMporting and using cors to allow browser to access server
const cors = require('cors');
app.use(cors());

//Handles cors requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//bodyParser to handle incoming requests
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://admin:admin@datarepproject.5znrs.mongodb.net/?retryWrites=true&w=majority&appName=DataRepProject');

 const diarySchema = new mongoose.Schema({
    title: String,
     entry: String,
  });
 
  const Diary = mongoose.model('Diary', diarySchema);

  app.post('/api/savedentries', async (req, res)=>{

    const { title, entry } = req.body;
   
    const newEntry = new Diary({ title, entry });
    await newEntry.save();
   
    res.status(201).json({ message: 'Movie created successfully', entry: newEntry });
    })

    app.get('/api/savedentries', async (req, res) => {
        const diary = await Diary.find({});
        res.json(diary);
      });