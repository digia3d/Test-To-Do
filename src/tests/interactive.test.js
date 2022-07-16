import { toDoListData } from '../temp/todo.js';
import addTask from '../temp/addtask.js';
import {
  editTodo, completeTodo, clearCompletedTodos,
} from '../temp/interactive.js';

const data = [{
  description: 'lorem ipsum coletas',
  completed: false,
  index: 1,
}, {
  description: 'play game',
  completed: false,
  index: 2,
},
{
  description: 'head home',
  completed: true,
  index: 3,
},
{
  description: 'do projects',
  completed: false,
  index: 4,
},
];
test('Should get  data from localStorage if exist ', () => {
  expect(Array.isArray(toDoListData())).toBe(true);
});
describe('When adding and removing a task you', () => {
  test('Should append the new task ', () => {
    addTask(data[0]);
    expect(toDoListData().length).toEqual(1);
  });
  test('Editing a selected items', () => {
    const input = 'hello world';
    editTodo(1, input);
    expect(toDoListData()[0].description).toBe(input);
    expect(toDoListData()).toHaveLength(1);
  });
  test('completed', () => {
    completeTodo(1);
    expect(toDoListData()[0].completed).toBeTruthy();
    expect(toDoListData()).toHaveLength(1);
  });
});
