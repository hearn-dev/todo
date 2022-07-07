import { selectedProjectId, projects } from './projects';

const taskCount = document.querySelector('[data-task-counter]');

// Assign task count
export function assignTaskCount(project) {
  let incomplete = project.tasks.filter((task) => !task.complete).length;

  if (selectedProjectId === 'home') {
    incomplete = projects.list.forEach((listItem) => {
      // eslint-disable-next-line no-undef
      listItem.tasks.filter(task.filter((task) => !task.complete).length);
    });
  }
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
