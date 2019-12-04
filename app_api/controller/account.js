const mongoose = require('mongoose');
const Acc = mongoose.model('user');


const usersCreate = function (req, res) { res
  .status(200)
  .json({"status" : "success"});
  };

const usersReadOne = function (req, res) {
  console.log('aaaa')	
  if (req.params && req.params.userid) {
    Acc
      .findById(req.params.userid)
      .exec((err, user) => {
        if (!user) {
          res	
            .status(404) 
            .json({	
              "message": "userid not found"
            });	 
          return;
        } 
        else if (err) {
          res	
            .status(404) 
            .json(err); 
          return; 	
        }
        else
        {
          res		
          .status(200)
          .json(user);
        }
      });
  } else {		
    res		
      .status(404) 	
      .json({	
        "message": "No userid in request"
      });		
  }
};

const newUser = function(req, res){
  console.log(req.body.name);
  console.log(req.body.password);
  Acc.create({
      name : req.body.name,
      password : req.body.password,
      email: req.body.email
      
    }, 
  function(err, user) {
      if (err) {
          sendJsonResponse(res, 403, err);
      }
      else {
          sendJsonResponse(res, 201, user);
      }
  });
}

var sendJsonResponse = function(res, status, content){
  res.status(status);
  res.json(content);
};

module.exports = {
  usersReadOne,
  usersCreate,
  newUser
};


