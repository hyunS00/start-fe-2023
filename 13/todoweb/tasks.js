/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
// 할 일 목록
// 할 일 목록
let tasks = [
  { text: 'JS공부하기', done: false },
  // 초기 할 일 목록을 여기에 추가할 수 있습니다
];

// 할 일을 추가하는 함수
export const addTask = text => {
  tasks.push({ text, done: false });
};

// 할 일을 삭제하는 함수
export const deleteTask = text => {
  tasks = tasks.filter(t => t.text !== text);
};

// 할 일의 완료 상태를 토글하는 함수
export const toggleTaskDone = text => {
  const task = tasks.find(t => t.text === text);
  if (task) {
    task.done = !task.done;
  }
};

// 할 일 목록을 가져오는 함수
export const getTasks = () => {
  return tasks;
};

// UI를 다시 그리는 함수를 저장하는 변수
let renderTasks;

// UI를 다시 그리는 함수를 설정하는 함수
export const setRenderTasksFunction = fn => {
  renderTasks = fn;
};

// 할 일을 삭제하거나 완료 상태를 토글한 후 UI를 다시 그리는 함수
export const updateAndRender = () => {
  renderTasks();
};
