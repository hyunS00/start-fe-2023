/* eslint-disable arrow-parens */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import { deleteTask, toggleTaskDone, updateAndRender } from './tasks.js';

// 할 일 항목을 만드는 함수
export const TaskComponent = task => {
  const li = document.createElement('li');

  const button = document.createElement('button');
  button.textContent = '×';
  button.className = 'delete';
  button.addEventListener('click', () => {
    deleteTask(task.text);
    updateAndRender();
  });

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'toggle-checked';
  checkbox.checked = task.done;
  checkbox.addEventListener('change', () => {
    toggleTaskDone(task.text);
    updateAndRender();
  });

  const span = document.createElement('span');
  span.textContent = task.text;
  span.className = 'text';

  li.appendChild(button);
  li.appendChild(checkbox);
  li.appendChild(span);

  if (task.done) {
    li.className = 'checked';
  }

  return li;
};
