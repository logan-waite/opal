Template.eventList.helpers({
  event:function() {
    Meteor.subscribe("events");
    return Events.find().fetch();
  }
})