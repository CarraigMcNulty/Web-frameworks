
const request = require('request');const apiOptions = { 
  server : 'http://localhost:3000' 
  }; 

 if (process.env.NODE_ENV === 'production') { 
    apiOptions.server = 'https://stark-hollows-05623.herokuapp.com'; 
    }

const _renderHomepage = function(req, res,responseBody){
 console.log( responseBody.savedLocations[1]['location_name']);
 console.log( responseBody.savedLocations);
  //locN =new array{};
    
  res.render('userhome', { username: 'User', pageheader: { 
    title: 'My Locations', 
    },
    
    savedLocations: responseBody.savedLocations,
    days: responseBody.savedLocations[0]['days']
  /*  days: [   
  {
    dayName: 'Monday',
    iconInfo: 'Sunny',
    weatherDesc: 'The sun is shining, the tank is clean and were getting outt...'
  },
/*
  {
    dayName: 'Tuesday',
    iconInfo: 'Sunny',
    weatherDesc: 'The sun is shining, the tank is clean and were getting outt...'
  },

  {
    dayName: 'Wednesday',
    iconInfo: 'Sunny',
    weatherDesc: 'The sun is shining, the tank is clean and were getting outt...'
  },

  {
    dayName: 'Thursday',
    iconInfo: 'Sunny',
    weatherDesc: 'The sun is shining, the tank is clean and were getting outt...'
  },

  {
    dayName: 'Friday',
    iconInfo: 'Sunny',
    weatherDesc: 'The sun is shining, the tank is clean and were getting outt...'
  },

  {
    dayName: 'Saturday',
    iconInfo: 'Sunny',
    weatherDesc: 'The sun is shining, the tank is clean and were getting outt...'
  },

  {
    dayName: 'Sunday',
    iconInfo: 'Sunny',
    weatherDesc: 'The sun is shining, the tank is clean and were getting outt...'
  },
    ], 

  savedLocations: 
  [
    'galway',
    'tralee',
    'dingle'
  ]*/

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
    console.log("b"); 
  _renderHomepage(req, res ,body); 
  } 
  );
  };
  
  



const newlocation= function(req, res){
  res.render('newlocation', { pageHeader: {
     title: 'New Location',
     username: 'User'},
    
    });
};  


/* GET 'Location info' page */
const locationInfo = function(req, res){
  res.render('location-info', {
    title: 'Starcups',
    pageHeader: {
      title: 'Starcups'
    },
    sidebar: {
      context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
      callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
    },
    location: {
      name: 'Starcups',
      address: '125 High Street, Reading, RG6 1PS',
      rating: 3,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      coords: {
        lat: 51.455041,
        lng: -0.9690884
      },
      openingTimes: [{
        days: 'Monday - Friday',
        opening: '7:00am',
        closing: '7:00pm',
        closed: false
      }, {
        days: 'Saturday',
        opening: '8:00am',
        closing: '5:00pm',
        closed: false
      }, {
        days: 'Sunday',
        closed: true
      }],
      reviews: [{
        author: 'Simon Holmes',
        rating: 5,
        timestamp: '16 July 2013',
        reviewText: 'What a great place. I can\'t say enough good things about it.'
      }, {
        author: 'Charlie Chaplin',
        rating: 3,
        timestamp: '16 June 2013',
        reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
      }]
    }
  });
};



module.exports = {
  
  locationInfo,
  userhome,
  newlocation,

};
