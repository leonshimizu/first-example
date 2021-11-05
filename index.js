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
    ]
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split("").reverse().join("");
    }
  },
});

// Vue.component('todo-item', {
//   props: ['todo'],
//   template: '<li>{{ todo.text }}</li>'
// });

// var app2 = new Vue({
//   el: '#app-2',
//   data: {
//     groceryList: [
//       { id: 0, text: 'Yogurt' },
//       { id: 1, text: 'Mango' },
//       { id: 2, text: 'Chicken' }
//     ]
//   }
// });