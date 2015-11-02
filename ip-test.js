if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Meteor.call("returnIp", function(err,res){
        Session.set('counter', res);
      })
    }
  });
}

if (Meteor.isServer) {
  Meteor.methods({
    returnIp:function(){
      return this.connection.clientAddress;
    }
  })
}
