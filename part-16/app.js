var app = Vue.createApp({
  data() {
    return {
      mobile: "",
      name: {
        firstname: "",
        lastname: "",
      },
    };
  },

  watch: {
    mobile(newValue, oldvalue) {
      console.log(newValue);

      if (isNaN(newValue)) {
        alert("Please enter a valid mobile number");
        this.mobile = oldvalue;
      }
      if (newValue.length == 11) {
        alert("An OTP number was entered");
      }
    },
    //"name.firstname": function (newValue, oldValue) {
    //  console.log(newValue, oldValue);
    //},
    name: {
      deep: true,
      handler: function (newValue, oldValue) {
        console.log(newValue, oldValue);
      },
    },
  },
});

app.mount("#app");
