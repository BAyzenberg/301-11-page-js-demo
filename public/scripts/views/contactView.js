// This is where we define the view for the "Contact" page

(function(model){
  const contactView = {};
  contactView.init = function() {
    console.log('Initalizing the CONTACTS');
    $('#content').text('STOP TRACKING BLOOD ACROSS MY FLOOR!');
  };




 model.contactView = contactView;
}(window));
