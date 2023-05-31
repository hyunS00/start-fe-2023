/* eslint-disable arrow-parens */
/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/extensions */
import { addTask, getTasks, setRenderTasksFunction } from './tasks.js';
import { TaskComponent } from './TaskComponent.js';

const taskForm = document.querySelector('.new-task');
const taskList = document.querySelector('ul');

// 할 일 목록을 화면에 그리는 함수
function renderTasks() {
  const tasks = getTasks();
  taskList.innerHTML = '';
  for (let task of tasks) {
    const li = TaskComponent(task);
    taskList.appendChild(li);
  }
}

// renderTasks 함수를 설정합니다
setRenderTasksFunction(renderTasks);

// 사용자의 입력을 처리하는 이벤트 핸들러
taskForm.addEventListener('submit', e => {
  e.preventDefault();
  const input = taskForm.querySelector('input');
  const text = input.value;
  input.value = '';

  addTask(text);
  renderTasks();
});

// 첫 화면에 할 일 목록을 그립니다
renderTasks();
