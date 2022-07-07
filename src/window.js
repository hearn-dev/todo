import { projects, selectedProjectId, findProjectById } from './projects';
import { assignTaskCount } from './tasks'

const projectsContainer = document.querySelector('[data-projects]');
const todoSection = document.querySelector('[data-todo]');
const tasksContainer = document.querySelector('[data-tasks-container]');
const taskProjectTitle = document.querySelector('[data-project-title]');
const newTaskDateInput = document.querySelector('[data-new-task-date-input]');
const taskTemplate = document.getElementById('task-template')


// Render screen
export function render() {

    // Clear and set project list
    clearElement(projectsContainer);
    renderProjects();

    if (selectedProjectId.id == null || selectedProjectId.id == '') {
        todoSection.style.display = 'none';
    }else if (selectedProjectId.id == 'home') {
        todoSection.style.display = '';
        taskProjectTitle.innerText = "Home";
    } else {
        todoSection.style.display = '';
        let project = findProjectById(selectedProjectId.id);
        renderTasks(project.tasks);

    }
}

// Refresh project name and task counter
export function taskWindow(project){
    assignProjectList(project);
    assignTaskCount(project);
}

// Assign project name and task count to task list
export function assignProjectList(project) {

    // Clear tasks
    clearElement(tasksContainer);

    // Assign project title to list
    taskProjectTitle.innerText = project.name;
}

export function renderProjects() {
    // Add each project to projectList
    projects.list.forEach(project => {
        const projectElement = document.createElement('li');
        projectElement.dataset.projectId = project.id;
        projectElement.classList.add('project-item');
        projectElement.innerText = project.name;
        if (projectElement.dataset.projectId === selectedProjectId.id) {
            projectElement.classList.add('active-list')
        };
        projectsContainer.appendChild(projectElement);
    })
}

function renderTasks(selectedList) {

    // Clear existing tasks
    if (selectedProjectId.id != 'home'){
        clearElement(tasksContainer);
    }

    // Render each task in list
    selectedList.forEach(task => {
        const taskElement = document.importNode(taskTemplate.content, true)
        const checkbox = taskElement.querySelector('input');
        const due = taskElement.querySelector('.due')
        checkbox.id = task.id;
        checkbox.checked = task.complete;
        const label = taskElement.querySelector('label');
        label.htmlFor = task.id;
        label.append(task.name);
        due.textContent = task.due;
        tasksContainer.appendChild(taskElement);
    })

}

// Clear container of all children
function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}