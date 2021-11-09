/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("/* global Vue, axios */\n\nVue.component('todo-item', {\n  props: ['todo'],\n  template: '<li>{{ todo.text }}</li>'\n});\n\nvar app = new Vue({\n  el: \"#app\",\n  data: {\n    message: \"Hello from JavaScript!\",\n    groceryList: [\n      { id: 0, text: 'Yogurt' },\n      { id: 1, text: 'Mango' },\n      { id: 2, text: 'Chicken' }\n    ],\n    showInfo: false,\n    displayInfo: false,\n    fruits: [\n      'mango',\n      'cherry',\n      'pineapple'\n    ],\n    newFruit: \"\",\n    todos: [\n      {\n        \"userId\": 1,\n        \"id\": 1,\n        \"title\": \"delectus aut autem\",\n        \"completed\": false\n      },\n      {\n        \"userId\": 1,\n        \"id\": 2,\n        \"title\": \"something else\",\n        \"completed\": false\n      }\n    ]\n  },\n  methods: {\n    reverseMessage: function() {\n      this.message = this.message.split(\"\").reverse().join(\"\");\n    },\n    allCaps: function() {\n      this.message = this.message.toUpperCase();\n    },\n    toggleInfo: function() {\n      console.log(\"toggling info\");\n      this.showInfo = !this.showInfo;\n    },\n    something: function() {\n      console.log(\"something\");\n      this.displayInfo = !this.displayInfo;\n    },\n    addFruit: function() {\n      console.log(\"adding fruit\");\n      this.fruits.push(this.newFruit);\n    }\n  }\n});\n\nvar app2 = new Vue({\n  el: \"#app-2\",\n  data: {\n    firstSum: \"\",\n    secondSum: \"\",\n    thirdSum: \"\",\n    calculatedSum: \"\",\n    firstProduct: \"\",\n    secondProduct: \"\",\n    thirdProduct: \"\",\n    calculatedProduct: \"\"\n  },\n  methods: {\n    sum: function() {\n      this.calculatedSum = parseInt(this.firstSum) + parseInt(this.secondSum) + parseInt(this.thirdSum);\n    },\n    product: function() {\n      this.calculatedProduct = parseInt(this.firstProduct) * parseInt(this.secondProduct) * parseInt(this.thirdProduct);\n    }\n  }\n});\n\nvar app3 = new Vue({\n  el: \"#app-3\",\n  data: {\n    guess: \"\",\n    message: \"Secret Message\",\n    correctGuss: false,\n    almost: \"So close, what's the password???\"\n  }\n});\n\nvar app4 = new Vue({\n  el: \"#app-4\",\n  data: {\n    todos: []\n  },\n  methods: {\n    loadTodos: function() {\n      console.log(\"in the load todos function\"); \n      axios\n        .get('https://jsonplaceholder.typicode.com/todos')\n        .then(response => {\n          console.log(response.data);\n          this.todos = response.data;\n        });\n    },\n    createTodo: function() {\n      console.log(\"creating todo...\");\n      axios.post('https://jsonplaceholder.typicode.com/todos', {\n        userId: 4,\n        title: \"go to the store\",\n        completed: false\n      }).then(response => {\n        console.log(response.data);\n        this.todos.push(response.data);\n      });\n    }\n  },\n  created: function () {\n    this.loadTodos();\n  },\n  // mounted: function() { // both this and created do the same things in this scenario\n  //   this.loadTodos();\n  // }\n}); \n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;