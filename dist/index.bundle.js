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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// index.js\n\nconst tasks = [\n    { description: 'Faire les courses', completed: false, index: 1 },\n    { description: 'Faire la lessive', completed: true, index: 2 },\n    { description: 'Nettoyer la maison', completed: false, index: 3 },\n  ];\n  \n  const generateTaskList = (tasks) => {\n    const taskListElement = document.querySelector('.to-do-group');\n  \n    tasks.forEach(task => {\n      const taskItem = document.createElement('li');\n      taskItem.classList.add('task-item');\n      taskItem.innerHTML = `\n        <input type=\"checkbox\" ${task.completed ? 'checked' : ''}>\n        <span>${task.description}</span>\n      `;\n      taskListElement.appendChild(taskItem);\n    });\n  };\n  \n  document.addEventListener('DOMContentLoaded', () => {\n    generateTaskList(tasks);\n  });\n  \n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;