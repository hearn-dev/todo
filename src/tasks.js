/* eslint-disable no-plusplus */
import { selectedProjectId, projects } from './projects';

const taskCount = document.querySelector('[data-task-counter]');

// Assign task count
export function assignTaskCount(project) {
  const incomplete = project.tasks.filter((task) => !task.complete).length;

  // Count tasks in project
  if (incomplete === 1) {
    taskCount.innerText = `${incomplete} task remaining`;
  } else {
    taskCount.innerText = `${incomplete} tasks remaining`;
  }
}

// Exactly as the title says
export function createTask(taskName, due) {
  return {
    id: Date.now().toString(),
    name: taskName,
    due,
    complete: false,
    project: selectedProjectId.id,
  };
}

export function taskCountAll() {
  let incomplete = 0;

  projects.list.forEach((project) => {
    project.tasks.forEach((task) => {
      if (!task.complete) {
        incomplete++;
      }
    });
  });
  if (incomplete === 1) {
    taskCount.innerText = `${incomplete} task remaining`;
  } else {
    taskCount.innerText = `${incomplete} tasks remaining`;
  }
}
