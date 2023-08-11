var app = Vue.createApp({
  data() {
    return {
      aboutMe : {
        names : 'mohim Molla',
        nickName : 'mohim',
        url : 'http://mohim.com',
      },
      skills: [
        { name: "HTML", experience: 5 },
        { name: "CSS", experience: 10 },
        { name: "JS", experience: 15 }
      ],
    };
  },

  methods: {
   
  }
});

app.mount("#app");