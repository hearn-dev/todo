import './style.css';
// eslint-disable-next-line import/named
import { render, saveAndRender, taskWindow } from './window';
import { assignTaskCount, createTask, taskCountAll } from './tasks';
import {
  projects,
  selectedProjectId,
  createProject,
  findProjectById,
} from './projects';
// import {format, parseISO} from 'date-fns';

// Assign DOM variables
const projectsContainer = document.querySelector('[data-projects]');
const newProjectForm = document.querySelector('[data-new-project-form');
const newProjectInput = document.querySelector('[data-new-project-input]');
const tasksContainer = document.querySelector('[data-tasks-container]');
const newTaskForm = document.querySelector('[data-new-task-form]');
const newTaskInput = document.querySelector('[data-new-task-input]');
const homeButton = document.querySelector('[data-home-button]');
const clearCompleteTasksButtons = document.querySelector(
  '[data-clear-complete-tasks-button]',
);
const deleteListButton = document.querySelector('[data-delete-list-button]');

// Show all tasks when Home Button clicked
homeButton.addEventListener('click', () => {
  selectedProjectId.id = 'home';
  taskCountAll();
  saveAndRender();
});

// Select project when clicked
projectsContainer.addEventListener('click', (e) => {
  // Target clicked items
  if (e.target.tagName.toLowerCase() === 'li') {
    // Determine id of clicked project
    selectedProjectId.id = e.target.dataset.projectId;

    // Find and assign project
    const project = findProjectById(selectedProjectId.id);

    // Assign name of project and task list count
    taskWindow(project);
    saveAndRender();
  }
});

// update Task count when task crossed off
tasksContainer.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() === 'input') {
    const project = findProjectById(e.target.className);
    const selectedTask = project.tasks.find((task) => task.id === e.target.id);
    selectedTask.complete = e.target.checked;
    if (selectedProjectId.id !== 'home') {
      assignTaskCount(project);
    } else {
      taskCountAll();
    }
  }
});

// Clear completed tasks when requested
clearCompleteTasksButtons.addEventListener('click', () => {
  const selectedList = findProjectById(selectedProjectId.id);
  selectedList.tasks = selectedList.tasks.filter((task) => !task.complete);
  saveAndRender();
});

// Delete Project when requested
deleteListButton.addEventListener('click', () => {
  projects.list = projects.list.filter(
    (project) => project.id !== selectedProjectId.id,
  );
  selectedProjectId.id = null;
  saveAndRender();
});

// Create new project when form submitted
newProjectForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Assign form content to name
  const projectName = newProjectInput.value;

  // Stop if form empty
  if (projectName == null || projectName === '') return;

  // Push project to list and clear form
  const project = createProject(projectName);
  newProjectInput.value = null;
  projects.list.push(project);

  // Render task window
  selectedProjectId.id = project.id;
  taskWindow(project);

  saveAndRender();
});

// Create new task when form submitted
newTaskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Assign task name and due date
  const taskName = newTaskInput.value;
  // const taskDue = newTaskDateInput.value;

  // Stop if form empty
  if (taskName == null || taskName === '') return;

  // Create task if form filled
  const task = createTask(taskName);

  // Clear form
  newTaskInput.value = null;
  // newTaskDateInput.value = null

  // Cache task
  const project = findProjectById(selectedProjectId.id);
  project.tasks.push(task);

  // Render task window
  assignTaskCount(project);
  saveAndRender();
});

render();
