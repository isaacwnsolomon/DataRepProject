const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@datarepproject.5znrs.mongodb.net/?retryWrites=true&w=majority&appName=DataRepProject');

const diarySchema = new mongoose.Schema({
    title: String,
    entry: String,
  });
 
  const Diary = mongoose.model('Diary', diarySchema);

  app.post('/savedentries', async (req, res)=>{

    const { title, entry } = req.body;
   
    const newEntry = new Diary({ title, entry });
    await newEntry.save();
   
    res.status(201).json({ message: 'Movie created successfully', entry: newEntry });
    })

    app.get('/savedentries', async (req, res) => {
        const diary = await Diary.find({});
        res.json(diary);
      });