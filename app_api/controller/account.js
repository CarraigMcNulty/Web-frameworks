const mongoose = require('mongoose');
const Acc = mongoose.model('user');

const usersCreate = function (req, res) { res
  .status(200)
  .json({"status" : "success"});
  };

const usersReadOne = function (req, res) {res
  if (req.params && req.params.userid) {
    Acc
      .findById(req.params.userid)
      .exec((err, user) => {
        if (!user) {
          res	
            .status(404) 
            .json({	
              "message": "recipeid not found"
            });	 
          return;
        } else if (err) {
          res	
            .status(404) 
            .json(err); 
          return; 	
        }
        res		
          .status(200)
          .json(recipe);
      });
  } else {		
    res		
      .status(404) 	
      .json({	
        "message": "No recipeid in request"
      });		
  }
};
    

module.exports = {
  usersReadOne,
  usersCreate
};


