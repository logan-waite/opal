import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup

  // Here we are going to have some dummy data
  var clients = [
    {
      firstName: "Tony",
      lastName: "Stark",
      email: "moneybags@avengers.com",
      phone: "(000) 000-0000",
      address: "None"
    },
    {
      firstName: "Steve",
      lastName: "Rogers"
    },
    {
      firstName: "Bruce",
      lastName: "Banner"
    }
  ];

  var events = [
    {
      startDate: moment().format("MMM D"),
      endDate: moment().add(3, 'days').format("MMM D"),
      location: "San Diego",
      type: "Retreat",
      max_attendees: 7,
      current_attendees: 3
    }
  ]

  Clients.remove({});
  Events.remove({});

  for (var i = 0; i < clients.length; i++) {
    client = clients[i];
    Clients.insert(client);
  }

  for (var i = 0; i < events.length; i++) {
    event = events[i];
    Events.insert(event);
  }
});
