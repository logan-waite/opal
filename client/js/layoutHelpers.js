Template.BaseLayout.helpers({
  test: function() {
    console.log(this)
  },
  title: function() {
    if (this.title) {
      return this.title;
    }
  },
  description: function() {
    if (this.description) {
      return this.description
    }
  }
})

Template.BaseLayout.events({
  "click .js-search-button" : function(event) {
    event.preventDefault();
    $('#search').animate({width:"toggle"}, 200);
  },
  "click .js-menu-item" : function(event) {
    // $(".active").removeClass("active");
    // console.log(Router.current().route.getName());
    // $(this).addClass("active");
  }
})
