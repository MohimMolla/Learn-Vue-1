var app = Vue.createApp({
  data() {
    return {
      activeClass : "red",
    };
  },
  methods: {
    setclass(classname){
      this.activeClass = classname;
    }
  },
});

app.mount("#app");
