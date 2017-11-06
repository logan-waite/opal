Router.onBeforeAction(function() {
  if (!Meteor.userId()) {
    // this.redirect("/login");
  }
  this.next()
})
// Router Configurations
Router.configure({
  layoutTemplate: "BaseLayout",
})

// Login routes
Router.route("/login", {
  layoutTemplate:"emptyLayout"
})

// Dashboard Routes
Router.route('/', function() {
  this.render('pageHeader', {
    to: "header",
    data: {
      title: "Dashboard",
      // description: "Optional Description, maybe?"
    }
  });
  this.render("dashboard");
})
// End Dashboard Routes

// Client Routes
Router.route("/clients", function() {
  this.render("pageHeader", {
    to: "header",
    data: {
      title: "Clients"
    }
  });
  this.render("clients");
})
// End Client Routes

// Event Routes
Router.route("/events", function() {
  this.render("pageHeader", {
    to: "header",
    data: {
      title: "Events"
    }
  });
  this.render("events");
})
// End Event Routes

// Calendar Routes
Router.route("/calendar", function() {
  this.render("pageHeader", {
    to: "header",
    data: {
      title: "Calendar"
    }
  });
  this.render("calendar");
})
// End Calendar Routes
