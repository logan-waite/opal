Router.configure({
  layoutTemplate: "BaseLayout",
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
  this.render("page_dashboard");
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
  this.render("page_clients");
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
  this.render("page_events");
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
  this.render("page_calendar");
})
// End Calendar Routes
