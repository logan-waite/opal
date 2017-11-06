///////////////
// Helpers
///////////////

Template.clientInfo.helpers({
  client: function() {
    return Clients.findOne({_id:Session.get("selectedClientID")})
  }
})
///////////////
// Events
//////////////
Template.clientInfo.events({

})
