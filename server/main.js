import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup

  // Here we are going to have some dummy data
  var clients = [
    {
      firstName: "Tony",
      lastName: "Stark"
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

  Clients.remove({});

  for (var i = 0; i < clients.length; i++) {
    client = clients[i];
    Clients.insert(client);
  }
});
