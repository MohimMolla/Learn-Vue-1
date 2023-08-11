var app = Vue.createApp({
  data() {
    return {
      show : false,

      skills: [
        { name: "HTML", experience: 5 },
        { name: "CSS", experience: 10 },
        { name: "JS", experience: 15 },
        { name: "SCS", experience: 25 },
        { name: "java", experience: 35 },
        { name: "c++", experience: 12 },
      ],

    };
  },

  methods: {
    toggle(){
      this.show = !this.show;
    }
  }
});

app.mount("#app");