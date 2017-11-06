// Client Methods
Meteor.methods({
  getClientList: function() {
    return Clients.findOne();
  }
})
