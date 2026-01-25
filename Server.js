const express = require('express');
const mongoose = require('mongoose');
const ToDo = require('./model');
const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://mohammadshameema5_db_user:Shameema5353@cluster0.oqlnd7i.mongodb.net/')
  .then(() => console.log('connected to db...'))
  .catch(err => console.log(err));

app.post('/add_student', async (req, res) => {
  const {StudentName} = req.body;
  const {Stud_id} = req.body;
  const {PhoneNumber} = req.body;
  try {
    const newData = new ToDo({ StudentName,Stud_id,PhoneNumber });
    await newData.save();
    return res.json("data added");
  } catch (err) {
    console.log(err.message);
  }
});

app.get('/get_student_data', async (req, res) => {
  try {
    const allData = await ToDo.find();
    return res.json(allData);
  } catch (err) 
  {
    console.log(err.message);
  }
});

app.put('/update_student/:id', async (req, res) => {
  const {completed}=  req.body

  try {
    const updatedData = await ToDo.findByIdAndUpdate(req.params.id ,{completed},{new:true});
    return res.json(updatedData);
  } catch (err) 
  {
    console.log(err.message);
  }
});

app.put('/update_student/:id', async (req, res) => {
const {StudentName} = req.body;
  const {Stud_id} = req.body;
  const {PhoneNumber} = req.body;
  
  try {
    const updatedData = await ToDo.findByIdAndUpdate(req.params.id ,{StudentName,Stud_id,PhoneNumber},{new:true});
    return res.json(updatedData);
  } catch (err) 
  {
    console.log(err.message);
  }
});

app.delete('/delete/:id', async (req, res) => {
    try {
      await ToDo.findByIdAndDelete(req.params.id);
      return res.json( await ToDo.find())
    }
    catch (err){
      console.log(err.message)
    }
})


app.listen(3000, () => console.log('server running on http://localhost:3000'));
