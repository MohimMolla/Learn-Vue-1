var app = Vue.createApp({
  data() {
    return {
      names: "",
    };
  },
  methods: {
    handelkeyup(e) {
      //console.log(e.target.value)
      this.names = e.target.value;
    },
    handelFormSubmit() {
      console.log("Form Submit");
      //e.preventDefault();
    },
    //handelFormSubmit(e){
    //  console.log(e);
    //  e.preventDefault();

    //}
    handelCardClick(e) {
      console.log(e);
    },
  },
});

app.mount("#app");
