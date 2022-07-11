/* eslint-disable import/no-mutable-exports */
// Initialize projects folder
const LOCAL_STORAGE_PROJECT_KEY = 'task.lists';
export const projects = { list: JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [] };

export const selectedProjectId = { id: '' };

// Initialize new projects with unique id
export function createProject(name) {
  return { id: Date.now().toString(), name, tasks: [] };
}

// Find project in array based on ID
export function findProjectById(projectId) {
  const { list } = projects;
  const project = list.find((listItem) => listItem.id === projectId);
  return project;
}

export function save() {
  localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projects.list));
}
