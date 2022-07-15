import _ from 'lodash';
import './style.css';
const Task = require('./modules/todotask.js')

const input = document.querySelector('.add-tasks');
const clear = document.querySelector('btn-clear-all');

const Task = new Task();

input.addEventListener('keypress', (e) => {
  const data = input.value;
  if (e.key === 'Enter') {
    Task.add(data);
    input.value = '';
  }
});

clear.addEventListener('click', (e) => {
  e.preventDefault();
  Task.clearCompleted();
});

Task.showTasks();