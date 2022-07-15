const saveToLocalStorage = (value) => (
  localStorage.setItem('tasks', JSON.stringify(value))
);

function getFromLocalStorage() {
  return window.localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
}

module.exports = {
  saveToLocalStorage,
  getFromLocalStorage,
};