const mongoose = require('mongoose');

const daySchema = new mongoose.Schema({
    
    dayName: String,
    weatherDesc: String,
  });


const locationSchema = new mongoose.Schema({
    
    
    locationName:String,
    coords: {
        type: [Number],
        index: '2dsphere'
      },

    days: [daySchema],

  });

const userSchema = new mongoose.Schema({
    
    name:{ type: String, required: true},
    password:{ type: String, required: true},
    email:{ type: String, required: true},
    savedLocations: [locationSchema]

  });
  
  mongoose.model('user', userSchema);