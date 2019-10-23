const mongoose = require('mongoose');
const acc = mongoose.model('user');
var ObjectID = require('mongodb').ObjectID;

const locationsCreate = function (req, res) {res
  .status(200)
  .json({"status" : "success"});
   };

   const locationsReadOne = function (req, res) {
    if (req.params && req.params.userid && req.params.locationid) {
      acc
        .findById(req.params.userid)
        .exec((err, user) => {
          if (!user) {
            res	
              .status(404) 
              .json({	
                "message": "userid not found"
              });	 
            return;
          } else if (err) {
            res	
              .status(404) 
              .json(err); 
            return; 	
          }
          if (user.savedlocations && user.savedLocations.length > 0) {
            const locations = user.savedlocations.id(req.params.locationid);
            if (!locations) {
              res
                .status(404)
                .json({
                  "message": "locationid not found"
              });
            } else {
              response = {
                user : {
                  name : user.name,
                  id : req.params.userid
                },
                savedlocations : locations
              };
              res
                .status(200)
                .json(response);
            }
          } else {
            res
              .status(404)
              .json({
                "message": "No locations found"
            });
          } 
        });
    } else {		
      res		
        .status(404) 	
        .json({	
          "message": "Not found, userid and locationid are both required"
        });		
    }
  };
   
  
    


module.exports = {

  locationsCreate,
  locationsReadOne

};
