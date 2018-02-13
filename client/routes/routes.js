//Routing via Iron.Router
Router.route('/', function () {
  this.render('start');
});
Router.route('start', function () {
  this.render('start');
});
Router.route('/Introduction.html', function () {
  this.render('introduction');
}); 
Router.route('/Help.html', function () {
  this.render('help');
}); 
Router.route('/About.html', function () {
  this.render('about');
}); 
Router.route('CreateUser', function () {
  this.render('CreateUser');
}); 