import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['To-Do', 'List'], ' ');
  element.classList.add('to-do');

  return element;
}

document.body.appendChild(component());