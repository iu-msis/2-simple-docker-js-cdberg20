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
    createComment: function(){
      fetch("api/comments/create.php", {
        method: 'POST',
        body: JSON.stringify(commentsApp.newComment),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json())
      .then(json => {
        console.log("Returned from post:", json);
        this.commentsList.push(json[0]);
        this.newComment = commentsApp.newCommentData();
      });
        console.log("Creating (POSTing)...!");
        console.log(commentsApp.newComment);
    },
    newCommentData() {
      return {
        commentText: ''
      }
    }
  }

})
