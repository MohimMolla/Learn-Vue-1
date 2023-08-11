var app = Vue.createApp({
  data() {
    return {
      num: "",
      result: "",
    };
  },
  methods: {
    //when i use tow way data binding then i use this v-model 
    //i dont neet this
    //handelInput(e) {
    //  //console.log(e);
    //  this.num = e.target.value
    //},
    getdouble(){
      this.result = this.num * 2 ;
    },
    getsqure(){
      this.result = this.num * this.num ;
    },
    addten(){
      this.result = this.num + 10 ;
    },
    reset(){
      this.num = "";
      this.result = "";
    },
  },
});

app.mount("#app");
