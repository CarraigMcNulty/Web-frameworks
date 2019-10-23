const mongoose = require('mongoose');

const daySchema = new mongoose.Schema({
    
    dayName: String,
    weatherDesc: String,
  });


const locationSchema = new mongoose.Schema({
    
    _id: String,
    locationName:String,
    coords: {
        type: [Number],
        index: '2dsphere'
      },

    days: [daySchema],

  });

const userSchema = new mongoose.Schema({
    _id: String,
    Name: String,
    Password: String,
    savedLocations: [locationSchema],

  });
  
  mongoose.model('user', userSchema);