if (Meteor.isClient) {
  var touchstarted = false;
  Template.hello.events({
    'touchstart button': function (e) {
      touchstarted = true;
      e.preventDefault();
      
      setTimeout(function() {
        if (touchstarted) {
          touchstarted = false;
          alert('click cancelled?')
        }
      }, 100);
    },
    
    'click button': function () {
      alert('click button ' + (touchstarted ? 'started' : 'not'));
      touchstarted = false;
    }
  });
}
