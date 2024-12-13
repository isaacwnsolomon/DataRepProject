//Importing mongoose and express
const mongoose = require('mongoose');
const express = require('express');
const app = express();
// Defines port where server will run 
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

// Connect to mongoDB using mongoose
mongoose.connect('mongodb+srv://admin:admin@datarepproject.5znrs.mongodb.net/');

//Defines scheme 
 const diarySchema = new mongoose.Schema({
    title: String,
     entry: String,
     // Add mood - enum so only predefined values
     mood: { type: String, enum: ["happy", "sad", "neutral", "excited", "angry", "tired"], required:true}, 
  }, { timestamps: true }); // Adds 'createdAt' and 'updatedAt');
 
  // Creatig a model based on entry schema
  const diaryModel = mongoose.model('Diary', diarySchema);

  //Route to create a new diary entry
  app.post('/api/savedentries', async (req, res)=>{

    const { title, entry, mood } = req.body;
   
    //Create and save newl created entry 
    const newEntry = new diaryModel({ title, entry, mood });
    await newEntry.save();
   
    // Respond with newly created entry 
    res.status(201).json({ message: 'Movie created successfully', entry: newEntry });
    })

    //Route to fetch all diary entries
    app.get('/api/savedentries', async (req, res) => {
      // Fetch and respond with all entries from data base
        const diary = await diaryModel.find({});
        res.json(diary);
      });

    // Delete to handle diary deletion by id
  app.delete('/api/savedentries/:id', async (req, res) => {

  console.log('Deleting entry with ID:', req.params.id);
  // Finds movie by ID and deletes from database
  const entry = await diaryModel.findByIdAndDelete(req.params.id);
     if (entry) {
      res.status(200).send({ message: "Entry deleted successfully", entry });
    } else {
      res.status(404).send({ message: "Entry not found" });
    }
  
});

// Route to fetch entries based on ID
app.get('/api/savedentries/:id', async (req ,res)=>{
  // Finds entry on ID
  const entry = await diaryModel.findById(req.params.id);
 // Returns movie in JSON
  res.json(entry)
})


// Update entry by ID
app.put('/api/savedentries/:id', async (req,res)=>{
  // Update entry and return updated docuemnt
  let entry = await diaryModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
  // Returns updated entry
  res.send(entry);
})

//Importing axios for making http requests
const axios = require('axios');
// Route ot fetch quote from api
app.get('/api/quote', async (req, res) => {
  try {
      const response = await axios.get('https://zenquotes.io/api/random');
      // Repsond with quote
      res.json(response.data); 
      //Errors
  } catch (error) {
      console.error('Error fetching quote:', error.message);
      res.status(500).json({ error: 'Failed to fetch quote.' });
  }
});

      // Start server and listen on specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});