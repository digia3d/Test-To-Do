const Task = require('../modules/todotask.js');
const { saveToLocalStorage, getFromLocalStorage} = require('../modules/localStorage.js');

const task = new Task();
const descriptions = [ 'Go to work', 'Go to School', 'Go to home']
  

describe('add list to task in localStorage', () => {
  test('save to localStorage', () => {
      task.add(descriptions[0]);
      task.add(descriptions[1])
    expect(JSON.parse(window.localStorage.getItem('tasks')).length).toEqual(2);
  });
});