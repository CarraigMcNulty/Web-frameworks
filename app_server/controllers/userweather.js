
const request = require('request');

const apiOptions = { 
  server : 'http://localhost:3000' 
  }; 

 if (process.env.NODE_ENV === 'production') { 
    apiOptions.server = 'https://stark-hollows-05623.herokuapp.com'; 
    }

    const _showError = function (req, res, status) {
      let title = '';
      let content = '';
      if (status === 404) { 
      title = '404, page not found'; 
      content = 'Oh dear. Looks like we can\'t find this page. Sorry.'; 
      } else { 
      title = `${status}, something's gone wrong`; 
      content = 'Something, somewhere, has gone just a little bit wrong.'; 
      }
      res.status(status); 
      res.render('generic-text', { 
      title : title, 
      content : content 
      }); 
      };


const _renderHomepage = function(req, res,responseBody){
 
  loc = responseBody.savedLocations;
 nolocations = [{dayname:"No Locations Added"}];


  if(responseBody.savedLocations == undefined || responseBody.savedLocations.length == 0 )
  {
    days = nolocations;
  }

  else
  {  
    days = responseBody.savedLocations[0]['days'];
  }

  res.render('userhome', { username: 'User', pageheader: { 
    title: 'My Locations', 
    },
    savedLocations: responseBody.savedLocations,
    days: days,
    username : responseBody.name
  });   
};

const userhome = function(req, res){
  const path = `/api/${req.params.userid}`;
  console.log("a");
  const requestOptions = { 
  url : apiOptions.server + path, 
  method : 'GET', 
  json : {}, 
  }; 


  request(requestOptions, (err, response, body) => {
    if(response.statusCode === 200)
   {
      _renderHomepage(req, res ,body); 
   }

    else
    { 
        _showError(req, res, response.statusCode );
    }    
  } 
  );
  };
 
const newlocation= function(req, res){
  res.render('newlocation', { pageHeader: {
     title: 'New Location',
     username: 'User'},
    
    });
};  


module.exports = {
  
  userhome,
  newlocation,

};
