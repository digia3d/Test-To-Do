import './style.css';

const Task = require('./modules/todotask.js');

const input = document.querySelector('.add-tasks');
const clear = document.querySelector('btn-clear-all');

const task = new Task();

input.addEventListener('keypress', (e) => {
  const data = input.value;
  if (e.key === 'Enter') {
    task.add(data);
    task.refresh();
    input.value = '';
  }
});

clear.addEventListener('click', (e) => {
  e.preventDefault();
  task.clearCompleted();
});

task.showTasks();