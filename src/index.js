import './style.css';

const tasks = [
  { description: 'Faire les courses', completed: false, index: 1 },
  { description: 'Faire la lessive', completed: true, index: 2 },
  { description: 'Nettoyer la maison', completed: false, index: 3 },
];

const generateTaskList = (tasks) => {
  const taskListElement = document.querySelector('.to-do-group');

  tasks.forEach((task) => {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
        <input type="checkbox" ${task.completed ? 'checked' : ''}>
        <span>${task.description}</span>
      `;
    taskListElement.appendChild(taskItem);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  generateTaskList(tasks);
});
