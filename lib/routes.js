Router.route('/main', function () {
  this.render('main');
});
Router.route('/', function () {
  this.render('login');
});
Router.route('/login', function () {
  this.render('login');
});
Router.route('/signup', function () {
  this.render('signup');
});
Router.route('/reset', function () {
  this.render('reset');
});
Router.route('/costs', function () {
  this.render('costs');
});
Router.route('/costs/:section', function () {
  this.render('costs');
});
Router.route('/inflow', function () {
  this.render('inflow');
});
Router.route('/inflow/:section', function () {
  this.render('inflow');
});
Router.route('/dev_seg', function () {
  this.render('dev_segmentation');
});
Router.route('/dev_seg/:section', function () {
  this.render('dev_segmentation');
});
Router.route('/dev_prog', function () {
  this.render('dev_program');
});
Router.route('/dev_prog/:section', function () {
  this.render('dev_program');
});
Router.route('/dev_rel', function () {
  this.render('dev_relations');
});
Router.route('/dev_rel/:section', function () {
  this.render('dev_relations');
});
Router.route('/design', function () {
  this.render('design');
});
Router.route('/design/:section', function () {
  this.render('design');
});
Router.route('/description', function () {
  this.render('description');
});
Router.route('/description/:section', function () {
  this.render('description');
});
Router.route('/strategy', function () {
  this.render('strategy');
});
Router.route('/strategy/:section', function () {
  this.render('strategy');
});
Router.route('/key_res', function () {
  this.render('key_resources');
});
Router.route('/key_res/:section', function () {
  this.render('key_resources');
});
Router.route('/key_act', function () {
  this.render('key_activities');
});
Router.route('/key_act/:section', function () {
  this.render('key_activities');
});
Router.route('/key_part', function () {
  this.render('key_partners');
});
Router.route('/key_part/:section', function () {
  this.render('key_partners');
});
Router.route('/manage_users', function () {
  this.render('manage_users');
});
Router.route('/manage_comments', function () {
  this.render('manage_comments');
});
Router.route('/manage_costs', function () {
  this.render('manage_costs');
});
Router.route('/www.3scale.net', {where: 'server'}).get(function() {
  this.response.writeHead(302, {
    'Location': "http://www.3scale.net"
  });
  this.response.end();
});

Router.route('/logout', function () {
  Meteor.logout();
  Router.go("/login");
});