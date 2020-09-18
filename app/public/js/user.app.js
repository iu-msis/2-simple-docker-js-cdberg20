var app = new Vue({
  el: '#userProfile',
  data: {
    userImgLarge: "",
    userImgSmall: "",
    userName: "",
    userCountry: "",
    userAge: "",
    userEmail: "",
  },

  created() {
    this.fetchUser();
  },

  methods: {
    fetchUser: function() {
      fetch("https://randomuser.me/api/")
      .then(response =>response.json())
      .then(data => {
        var userData = data.results[0];
        console.log(userData);
        this.userImgLarge = userData.picture.large;
        this.userImgSmall = userData.picture.thumbnail;
        this.userName = userData.name.first + " " + userData.name.last;
        this.userCountry = userData.location.country;
        this.userAge = userData.dob.age;
        this.userEmail = userData.email;
        });
      }
    }
  })
