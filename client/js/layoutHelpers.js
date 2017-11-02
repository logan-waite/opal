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
