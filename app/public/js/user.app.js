var app = new Vue({
  el: '#userProfile',
  data: {
    userName: {},
    userCountry: {},
    userAge: {},
    userEmail:{},
  },

  created() {
    console.log('this vue app has been created!');
  },
  created() {
    this.fetchUser();
  },

      methods: {
        fetchUser: function() {
          fetch("https://randomuser.me/api")
          .then( function(response) {response.json()} )
          .then( data => {
            var userData = data.results[0];
            console.log(userData);
            this.userName = userData.name.first + " " + userData.name.last;
            this.userCountry = userData.country;
            this.userAge = userData.age;
            this.userEmail = userData.email;
        });
      }
    }
  })
