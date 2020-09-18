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
      const displayUserName = ({ title, last, first }) => {
        document.querySelector(
          ".user-name"
        ).textContent = `${title} ${first} ${last}`;
      };
      console.log(json)
    });
  }
})
