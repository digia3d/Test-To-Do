const saveToLocalStorage = (key, value) => (
  localStorage.setItem(key, JSON.stringify(value))
);

const getFromLocalStorage = (key) =>(localStorage.getItem(key))?JSON.parse(localStorage.getItem(key)):[];

module.exports = {
  saveToLocalStorage,
  getFromLocalStorage,
};