const request = require('request');const apiOptions = { 
  server : 'http://localhost:3000' 
  }; 

 if (process.env.NODE_ENV === 'production') { 
    apiOptions.server = 'https://stark-hollows-05623.herokuapp.com'; 
    }

/* GET home page */
const login = function(req, res){
  res.render('login', {
    pageHeader: {
      title: 'Login',
      strapline: 'Login to your account'
    },
  });
};

const signup= function(req, res){
  res.render('signup', { pageHeader: {
    title: 'Signup'} });
};

const About= function(req, res){
  res.render('About', { pageHeader: {
    title: 'About'} });
};

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

/* PUSH sing up page */
const userSignUp = function(req, res){ 
  const path = `/api/signup`; 
  const postdata = { 
  name: req.body.name+" " +req.body.Sname, 
  password: req.body.password
  }; 

  const requestOptions = {
      url : apiOptions.server + path, 
      method : 'POST', 
      json : postdata 
  };
  request( requestOptions,(err, response, body) => {
  if (response.statusCode === 201) { 
      console.log(response.body._id);
  res.redirect(`/`); 
  } else { 
  _showError(req, res, response.statusCode); 
  }
  }
  );
};



module.exports = {
  login,
  signup,
  About,
  userSignUp
};
