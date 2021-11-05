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
    displayInfo: false,
    fruits: [
      'mango',
      'cherry',
      'pineapple'
    ],
    newFruit: "",
    todos: [
      {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "something else",
        "completed": false
      }
    ]
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
      this.showInfo = !this.showInfo;
    },
    something: function() {
      console.log("something");
      this.displayInfo = !this.displayInfo;
    },
    addFruit: function() {
      console.log("adding fruit");
      this.fruits.push(this.newFruit);
    }
  }
});

var app2 = new Vue({
  el: "#app-2",
  data: {
    firstSum: "",
    secondSum: "",
    thirdSum: "",
    calculatedSum: "",
    firstProduct: "",
    secondProduct: "",
    thirdProduct: "",
    calculatedProduct: ""
  },
  methods: {
    sum: function() {
      this.calculatedSum = parseInt(this.firstSum) + parseInt(this.secondSum) + parseInt(this.thirdSum);
    },
    product: function() {
      this.calculatedProduct = parseInt(this.firstProduct) * parseInt(this.secondProduct) * parseInt(this.thirdProduct);
    }
  }
});