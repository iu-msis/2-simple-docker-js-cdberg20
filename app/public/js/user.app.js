var app = new Vue({
  el: '#panelRight',
  data: {},
  userList: [],
  user: {},
  created() {
    fetch("https://randomuser.me/api")
    .then( function(response) {response.json()} )
    .then( json => {
      this.user = json;

      console.log(json)
    });
  }
})
