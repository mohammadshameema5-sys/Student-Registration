const mongoose = require("mongoose");
const ToDo = new mongoose.Schema(
  {
    StudentName:{
      type: String,
      required:true,
      trim : true
    },
    Stud_id:{
      type:String,
      trim :true
    },
    PhoneNumber:{
      type:String,
      trim :true
    },
  },
{
    timestamp: true
  }
);

module.exports = mongoose.model("todo", ToDo);