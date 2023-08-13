var app = Vue.createApp({
  data() {
    return {
      
     
        firstname: "",
        lastname: "",
        fullname: "",
   
    };
  },

  watch: {
   
    },
    computed :{
      //fullname (){
      //  return this.firstname + " " + this.lastname
      //}
    },
    methods: {
      //fullname (){
      //  return this.firstname + " " + this.lastname
      //}
    },
    watch : {
      firstname(newvalue){
        this.fullname = newvalue + " " + this.lastname;
      },
      lastname(newvalue){
        this.fullname =this.firstname + " " + newvalue
      }
    }
});

app.mount("#app");
