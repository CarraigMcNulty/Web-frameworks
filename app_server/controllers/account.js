/* GET home page */
const login = function(req, res){
  res.render('login', {
    title: 'Login to Account',
    pageHeader: {
      title: 'Login',
      strapline: 'Login to your account'
    },
  });
};

const signup= function(req, res){
  res.render('signup', { title: 'Signup' });
};


module.exports = {
  login,
  signup
};
