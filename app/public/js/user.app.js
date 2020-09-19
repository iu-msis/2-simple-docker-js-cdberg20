var app = new Vue({
  el: '#userProfile',
  data: {
    userImgLarge: "",
    userImgThumb: "",
    userName: "",
    userCountry: "",
    userBirthDate: "",
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
        this.userImgThumb = userData.picture.thumbnail;
        this.userName = userData.name.first + " " + userData.name.last;
        this.userCountry = userData.location.country;
        this.userBirthDate = userData.dob.date;
        this.userAge = userData.dob.age;
        this.userEmail = userData.email;
        })
      .catch((error)=>{
        console.error('Error: ',error);
        fetch("dummy\randomuser-sample.json")
        .then(response =>response.json())
        .then(data => {
          var userData = data.results[0];
          console.log(userData);
          this.userImgLarge = userData.picture.large;
          this.userImgThumb = userData.picture.thumbnail;
          this.userName = userData.name.first + " " + userData.name.last;
          this.userCountry = userData.location.country;
          this.userBirthDate = userData.dob.date;
          this.userAge = userData.dob.age;
          this.userEmail = userData.email;
          })
        });
      }
    }
  })
