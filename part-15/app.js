var app = Vue.createApp({
  data() {
    return {
      show: false,
      reveiw: "",
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
  computed: {
    totalCount1() {
      console.log("Total count From computed");
      return this.skills.length;
    },
    experiencedSkills() {
      let ex = this.skills.filter((item) => {
        return item.experience >= 20;
      });
      return ex;
    },

    //experiencedSkills() {
    //  let es = this.skills.filter((item) => {
    //    return item.experience >= 20;
    //  });

    //  return es;
    //},
  },

  methods: {
    removeSkill(i) {
      this.skills.splice(i, 1);
    },
    totalCount() {
      console.log("Total count From");
      return this.skills.length;
    },
  },
});

app.mount("#app");
