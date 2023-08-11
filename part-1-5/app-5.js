var app = Vue.createApp({
	data() {
			return {};
	},
	methods: {
			getCurrentTime() {
					let ct = new Date();
					return ct;
			},
	},
});

app.mount("#app");

var app1 = Vue.createApp({
	data() {
			return {
					count: 0,
			};
	},
	methods: {
			increases() {
					//this.count++;
					this.count = this.count + 1;
			},
			decreases() {
						//this.count--;
					this.count = this.count - 1;
			},
	},
});

app1.mount("#app1");
