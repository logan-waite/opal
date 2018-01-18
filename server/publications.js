Meteor.publish("clients", function(){
    // if (this.userId){
        return Clients.find({});
    // }
});

Meteor.publish("events", function() {
  return Events.find({});
})
