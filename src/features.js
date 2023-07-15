// Fonction pour récupérer les tâches à partir du stockage local
const getTasksFromLocalStorage = () => {
  const tasksString = localStorage.getItem('tasks');
  if (tasksString) {
    return JSON.parse(tasksString);
  }
  return [];
};

// Fonction pour sauvegarder les tâches dans le stockage local
const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Tableau initial des tâches
let tasks = getTasksFromLocalStorage();

// Fonction pour ajouter une nouvelle tâche
const addTask = (description) => {
  const newTask = {
    description,
    completed: false,
    index: tasks.length + 1,
  };

  tasks.push(newTask);
  saveTasksToLocalStorage(tasks);
};

// Fonction pour supprimer une tâche
const deleteTask = (index) => {
  tasks.splice(index, 1);
  tasks.forEach((task, i) => {
    task.index = i + 1;
  });
  saveTasksToLocalStorage(tasks);
};

// Fonction pour éditer la description d'une tâche
const editTaskDescription = (index, newDescription) => {
  tasks[index].description = newDescription;
  saveTasksToLocalStorage(tasks);
};

const updateTaskStatus = (index, completed) => {
  tasks[index].completed = completed;
  saveTasksToLocalStorage(tasks);
};

// Fonction pour générer la liste des tâches
const generateTaskList = () => {
  const taskListElement = document.querySelector('.to-do-group');
  taskListElement.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      updateTaskStatus(index, checkbox.checked);
      generateTaskList();
    });

    const taskDescription = document.createElement('span');
    taskDescription.textContent = task.description;
    taskDescription.contentEditable = true;
    taskDescription.addEventListener('input', () => {
      editTaskDescription(index, taskDescription.textContent);
    });

    const actionsContainer = document.createElement('div');
    actionsContainer.classList.add('actions-container');

    const optionsIcon = document.createElement('i');
    optionsIcon.classList.add('fas', 'fa-ellipsis-v');
    optionsIcon.addEventListener('click', () => {
      // Fonctionnalité des trois points à implémenter
    });

    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fas', 'fa-trash');
    deleteIcon.addEventListener('click', () => {
      deleteTask(index);
      generateTaskList();
    });

    // Gérer l'affichage des icônes en fonction de l'état de la tâche
    if (task.completed) {
      actionsContainer.appendChild(deleteIcon);
    } else {
      actionsContainer.appendChild(optionsIcon);
    }

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskDescription);
    taskItem.appendChild(actionsContainer);

    taskListElement.appendChild(taskItem);
  });
};

// Fonction pour mettre à jour l'état d'une tâche

const clearCompletedTasks = () => {
  tasks = tasks.filter((task) => !task.completed);
  saveTasksToLocalStorage(tasks);
  generateTaskList();
};

// Événement lors du chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.querySelector('.add-button');
  const input = document.querySelector('.task-input');
  const clearButton = document.querySelector('.clear-list');

  // Événement lors de l'appui sur la touche "Entrée"
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const description = input.value.trim();
    if (description !== '') {
      addTask(description);
      input.value = '';
      generateTaskList();
    }
  }
});

  addButton.addEventListener('click', () => {
    const description = input.value.trim();
    if (description !== '') {
      addTask(description);
      input.value = '';
      generateTaskList();
    }
  });

  clearButton.addEventListener('click', () => {
    clearCompletedTasks();
  });

  generateTaskList();
});
