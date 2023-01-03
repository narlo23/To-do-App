import App from "./App.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

const DUMMY_DATA = [
  {
    _id: 1,
    content: "JavaScript 학습하기",
    isCompleted: true,
  },
  {
    _id: 2,
    content: "JavaScript 복습하기",
    isCompleted: false,
  },
];

const $target = document.querySelector("#app");

new App({ $target });
