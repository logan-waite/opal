Session.set('clientSelected', false)

Template.clientList.helpers({
  clients:function() {
    Meteor.subscribe("clients");
    return Clients.find().fetch();
  }
})

Template.clientList.events({
  "click .js-choose-client": function() {
    Session.set('clientSelected', true);
  }
})
