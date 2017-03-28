// This is where we define the view for the "Home" page, in other words, the default view

(function(model){
  const homeView = {};
  homeView.init = function() {
    console.log('Initalizing the HOME');
    $('#content').text('Hello Master, welcome home!');
  };




 model.homeView = homeView;
}(window));
