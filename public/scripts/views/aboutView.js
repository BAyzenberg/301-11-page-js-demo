// This is where we define the view for the "About" page

(function(model){
  const aboutView = {};
  aboutView.init = function() {
    console.log('Initalizing the ABOUT');
    $('#content').text('Have a bite Master, I know it\'s your favorite');
  };




 model.aboutView = aboutView;
}(window));
