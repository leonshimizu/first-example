/* global Vue */

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

var app = new Vue({
  el: "#app",
  data: {
    message: "Hello from JavaScript!",
    groceryList: [
      { id: 0, text: 'Yogurt' },
      { id: 1, text: 'Mango' },
      { id: 2, text: 'Chicken' }
    ],
    showInfo: false,
    displayInfo: false
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split("").reverse().join("");
    },
    allCaps: function() {
      this.message = this.message.toUpperCase();
    },
    toggleInfo: function() {
      console.log("toggling info");
      // if (this.showInfo === false) {
      //   this.showInfo = true;
      // } else {
      //   this.showInfo = false;
      // }
      this.showInfo = !this.showInfo;
    },
    something: function() {
      console.log("something");
      this.displayInfo = !this.displayInfo;
    }
  }
});

var app2 = new Vue({
  el: "#app-2",
  data: {
    first: "",
    second: "",
    third: "",
    answer: ""
  },
  methods: {
    sum: function() {
      var calculatedSum = parseInt(this.first) + parseInt(this.second) + parseInt(this.third);
      this.answer = calculatedSum;
    }
  }
});