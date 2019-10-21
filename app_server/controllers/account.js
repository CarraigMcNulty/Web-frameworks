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


module.exports = {
  login,
  signup
};
