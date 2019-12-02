const About= function(req, res){
    res.render('About', { pageHeader: {
      title: 'About'} });
  };
  
  module.exports = {  
    About
  };