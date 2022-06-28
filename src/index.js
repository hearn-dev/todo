import './style.css';

// Assign DOM variables
const projectsContainer = document.querySelector('[data-projects]');
const newProjectForm = document.querySelector('[data-new-project-form');
const newProjectInput = document.querySelector('[data-new-project-input]');
const taskProjectTitle = document.querySelector('[data-project-title]');
const tasksContainer = document.querySelector('[data-tasks-container]');
const taskCount = document.querySelector('[data-task-counter]');
const newTaskForm = document.querySelector('[data-new-task-form]');
const newTaskInput = document.querySelector('[data-new-task-input]');
const newTaskDateInput = document.querySelector('[data-new-task-date-input]');
let selectedProjectId;


// Initialize projects folder
const projects = [];

// Select project when clicked
projectsContainer.addEventListener('click', e => {
        if (e.target.tagName.toLowerCase() === 'li') {

            // Determine id of clicked project
            selectedProjectId = e.target.dataset.projectId;

            // Find and assign project
            const project = findProjectById(projects, selectedProjectId)
            console.log(project);
 
            // Assign name of project and task list count
            assignProjectList(project.name, project.tasks.length);
            render();
        }
    }
)

// Create new project when form submitted
newProjectForm.addEventListener('submit', e => {
    e.preventDefault();
    const projectName = newProjectInput.value;
    if (projectName == null || projectName === '') return;
    const project = createProject(projectName)
    newProjectInput.value = null;
    projects.push(project);
    render();

});

// Create new task when form submitted
newTaskForm.addEventListener('submit', e => {
    e.preventDefault();
    const taskName = newTaskInput.value;
    const taskDue = newTaskDateInput.value;
    if (taskName == null || taskName === '') return;
    const task = createTask(taskName, taskDue)
    newTaskInput.value = null;
    newTaskDateInput.value = null
    const project = findProjectById(projects, selectedProjectId);
    project.tasks.push(task);
    console.log(project.tasks)
    render();

});

// Initialize new projects with unique id
function createProject(name) {
    return { id: Date.now().toString(), name: name, tasks: []}
}

// Assign project name and task count to task list
function assignProjectList(projectName, taskNumber) {
    
    // Clear tasks
    clearElement(tasksContainer);

    // Assign project title to list
    taskProjectTitle.innerText = projectName;

    // Count tasks in project
    if (taskNumber === 1) {
        taskCount.innerText = `${taskNumber} task remaining`
    } else {
        taskCount.innerText = `${taskNumber} tasks remaining`
    }




}

function findProjectById(projects, projectId) {
    const project = projects.find(project => project.id === projectId);
    return project;

}

function createTask(taskName, due) {
    return { id: Date.now().toString(), name: taskName, due: due };
}

// Render screen
function render() {

    // Clear list of projects
    clearElement(projectsContainer);

    // Add each project to projectList
    projects.forEach(project => {
        const projectElement = document.createElement('li');
        projectElement.dataset.projectId = project.id;
        projectElement.classList.add('project-item');
        projectElement.innerText = project.name;
        if (projectElement.dataset.projectId === selectedProjectId) {
            projectElement.classList.add('active-list')
        };
        projectsContainer.appendChild(projectElement);
    })

    // Create task list

}


// Clear container of all children
function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

render()
assignProjectList('shoop doop', 0);
console.log(createTask('do dishes', '11/22/63'))

