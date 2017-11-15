// Router.onBeforeAction(function() {
//   if (!Meteor.userId()) {
//     // this.redirect("/login");
//   }
//   this.next()
// })
// Router Configurations
Router.configure({
  layoutTemplate: "BaseLayout",
  onAfterAction: function() {
    $('.active').removeClass('active');
    var route = Router.current().route.getName();
    if (route === undefined) {
      $('#menu_dashboard').addClass('active');
    } else if (route.indexOf("client") > -1) {
      console.log("client page");
      $("#menu_clients").addClass("active");
    } else if (route.indexOf("event") > -1) {
      $('#menu_events').addClass("active");
    } else if (route.indexOf("calendar") > -1) {
      $('#menu_calendar').addClass("active");
    } else {
      $('#menu_dashboard').addClass('active');
    }
  }
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
Router.route("/client/:_id", function() {
  Meteor.subscribe("clients");
  var clientId = this.params._id;
  this.render("clientInfo", {
    data: function() {
      return Clients.findOne({_id:clientId});
    }
  });
});
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
  this.render("calendar");
})
// End Calendar Routes
