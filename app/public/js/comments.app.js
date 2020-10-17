var app = new Vue({
  el: '#commentsApp',
  data: {
    commentsList:[{
      id: '',
      commentText: '',
    }],
    newComment:{
      commentText:''
    }
    },

    created(){
      this.fetchComments();
      this.createComment();
    },

  methods: {

    fetchComments: function() {
      fetch("api/comments/")
      .then(response => response.json())
      .then(json => {
        this.commentsList = json;

        console.log(this.commentsList);
      });
    },
    createComment(){
      fetch("api/comments/", {
        method: 'POST',
        body: JSON.stringify(this.newComment),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json())
      .then( json => {
        console.log("Returned from post:", json);
        this.commentsList.push(json[0]);
        this.newComment = this.newCommentData();
      });
        console.log("Creating (POSTing)...!");
        console.log(this.newComment);
    },
    newCommentData() {
      return {
        commentText: ''
      }
    }
  }

})
