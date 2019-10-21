const mongoose = require('mongoose');
const acc = mongoose.model('user');

const usersCreate = function (req, res) { res
  .status(200)
  .json({"status" : "success"});
  };
const usersReadOne = function (req, res) {res
  .status(200)
  .json({"status" : "success"});
   };


module.exports = {
  usersReadOne,
  usersCreate
};


