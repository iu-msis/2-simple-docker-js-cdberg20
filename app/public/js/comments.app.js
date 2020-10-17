var app = new Vue({
  el: '#commentsApp',
  data: {
    reviewList: id: "",
    commentText: "",
  },
  created() {
    this.fetchComments();
  },

  methods: {

    fetchComments: function() {
      fetch("api/index.php")
      .then(response =>response.json())
      .then(data => {
        var userData = data.results[0];
        console.log(userData);
