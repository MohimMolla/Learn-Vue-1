var app = Vue.createApp({
  data() {
    return {
      skills: ["Html", "css", "js", "php"],
      newSkil: "",

      moreskills: [
        { names: "Html", exprience: 5 },
        { names: "Css", exprience: 8 },
        { names: "Js", exprience: 2 },
        { names: "vue Js", exprience: 1 },
      ],
      moreskillsadd: {
        names: "",
        exprience: 0,
      },
    };
  },
  methods: {
    addskill() {
      this.skills.push(this.newSkil);
    },

    //addmoreskillsadd() {
    //  //this.moreskills.push({names: this.moreskillsadd, exprience : 0});
    //  this.moreskills.push({ names: this.moreskillsadd, experience: 0 });
    //},

    addmoreskillsadd() {
      this.moreskills.push({
        names: this.moreskillsadd.names,
        exprience: this.moreskillsadd.exprience,
      });
      this.moreskillsadd.names = ''; 
      this.moreskillsadd.exprience = 0; 
    },



    removeSkill(i) {
      this.skills.splice(i, 1);
    },
    m_removeSkill(i) {
      this.moreskills.splice(i, 1);
    },
  },
});

app.mount("#app");
