/* eslint-disable import/no-mutable-exports */
// Initialize projects folder
export const projects = { list: [] };

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
