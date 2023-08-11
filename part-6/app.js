var app = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increases(amount) {
      //this.count++;
      this.count = this.count + amount;
    },
    decreases(amount) {
      //this.count--;
      this.count = this.count - amount;
    },
    test(ev) {
      console.log("test");
						console.log(ev);
    },
  },
});

app.mount("#app");
