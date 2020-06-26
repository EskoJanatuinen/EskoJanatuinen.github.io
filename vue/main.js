var app = new Vue({
  el: "#app",
  data: {
    user_name: "",
    user_email: "",
    user_message: "",
    name: "",
    email: "",
    message: "",
    title: "Testing Vue.js",
    isSubmitted: false,
  },
  methods: {
    submitting: function () {
      this.name = this.user_name;
      this.email = this.user_email;
      this.message = this.user_message;
      this.user_name = "";
      this.user_email = "";
      this.user_message = "";
      this.isSubmitted = true;
      this.title = "Vue.js works!";
    },
    resetting: function () {
      this.name = this.user_name;
      this.email = this.user_email;
      this.message = this.user_message;
      this.name = "";
      this.email = "";
      this.message = "";
      this.isSubmitted = false;
      this.title = "Testing Vue.js";
    },
  },
});
