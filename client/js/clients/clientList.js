Session.set('clientSelected', true)
Session.set('selectedClientID', "2uuhW3pjKSx5F3JZn");

Template.clientList.helpers({
  clients:function() {
    Meteor.subscribe("clients");
    return Clients.find().fetch();
  }
})

Template.clientList.events({
  "click .js-choose-client": function(event) {
    // console.log(this);
    Session.set("selectedClientID", this._id);
    Session.set('clientSelected', true);
  }
})
