import {
  projects, selectedProjectId, findProjectById, save,
} from './projects';
import { assignTaskCount } from './tasks';

const projectsContainer = document.querySelector('[data-projects]');
const todoSection = document.querySelector('[data-todo]');
const tasksContainer = document.querySelector('[data-tasks-container]');
const taskProjectTitle = document.querySelector('[data-project-title]');
// const newTaskDateInput = document.querySelector('[data-new-task-date-input]');
const taskTemplate = document.getElementById('task-template');

// Clear container of all children
function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

// Renders project list
export function renderProjects() {
  // Add each project to projectList
  projects.list.forEach((project) => {
    const projectElement = document.createElement('li');
    projectElement.dataset.projectId = project.id;
    projectElement.classList.add('project-item');
    projectElement.innerText = project.name;
    if (projectElement.dataset.projectId === selectedProjectId.id) {
      projectElement.classList.add('active-list');
    }
    projectsContainer.appendChild(projectElement);
  });
}

// Renders tasks from selected task list
function renderTasks(selectedList) {
  // Render each task in list
  selectedList.forEach((task) => {
    const taskElement = document.importNode(taskTemplate.content, true);
    const checkbox = taskElement.querySelector('input');
    const due = taskElement.querySelector('.due');
    checkbox.id = task.id;
    checkbox.classList.add(task.project);
    checkbox.checked = task.complete;
    const label = taskElement.querySelector('label');
    label.htmlFor = task.id;
    label.append(task.name);
    due.textContent = task.due;
    tasksContainer.appendChild(taskElement);
  });
}

// Render tasks from all project lists
function showAllTasks() {
  projects.list.forEach((project) => {
    renderTasks(project.tasks);
  });
}

// Render screen
export function render() {
  // Clear and set project list
  clearElement(projectsContainer);
  // Clear existing tasks
  clearElement(tasksContainer);
  renderProjects();

  if (selectedProjectId.id == null || selectedProjectId.id === '') {
    todoSection.style.display = 'none';
  } else if (selectedProjectId.id === 'home') {
    todoSection.style.display = '';
    taskProjectTitle.innerText = 'Home';
    showAllTasks();
  } else {
    todoSection.style.display = '';
    const project = findProjectById(selectedProjectId.id);
    renderTasks(project.tasks);
  }
}

export function saveAndRender() {
  save();
  render();
}

// Assign project name and task count to task list
export function assignProjectList(project) {
  // Clear tasks
  clearElement(tasksContainer);

  // Assign project title to list
  taskProjectTitle.innerText = project.name;
}

// Refresh project name and task counter
export function taskWindow(project) {
  assignProjectList(project);
  assignTaskCount(project);
}
