Meteor.publish("clients", function(){
    // if (this.userId){
        return Clients.find({});
    // }
});
