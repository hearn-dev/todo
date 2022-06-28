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
const taskTemplate = document.getElementById('task-template')
const todoSection = document.querySelector('[data-todo]');
let selectedProjectId;


// Initialize projects folder
const projects = [];

// Select project when clicked
projectsContainer.addEventListener('click', e => {

        // Target clicked items
        if (e.target.tagName.toLowerCase() === 'li') {

            // Determine id of clicked project
            selectedProjectId = e.target.dataset.projectId;

            // Find and assign project
            const project = findProjectById(projects, selectedProjectId)
 
            // Assign name of project and task list count
            assignProjectList(project.name);
            assignTaskCount(project.tasks.length);
            render();
        }
    }
)

// Create new project when form submitted
newProjectForm.addEventListener('submit', e => {
    e.preventDefault();

    // Assign form content to name
    const projectName = newProjectInput.value;

    // Stop if form empty
    if (projectName == null || projectName === '') return;

    // Push project to list and clear form
    const project = createProject(projectName)
    newProjectInput.value = null;
    projects.push(project);

    // Render task window
    selectedProjectId = project.id
    taskWindow(project.name, project.tasks.length);

    render();

});

// Create new task when form submitted
newTaskForm.addEventListener('submit', e => {
    e.preventDefault();

    // Assign task name and due date
    const taskName = newTaskInput.value;
    const taskDue = newTaskDateInput.value;

    // Stop if form empty
    if (taskName == null || taskName === '') return;

    // Create task if form filled
    const task = createTask(taskName, taskDue)

    // Clear form
    newTaskInput.value = null;
    newTaskDateInput.value = null

    // Cache task
    const project = findProjectById(projects, selectedProjectId);
    project.tasks.push(task);

    // Render task window
    assignTaskCount(project.tasks.length);
    render();

});

// Initialize new projects with unique id
function createProject(name) {
    return { id: Date.now().toString(), name: name, tasks: []}
}

// Assign project name and task count to task list
function assignProjectList(projectName) {

    // Clear tasks
    clearElement(tasksContainer);

    // Assign project title to list
    taskProjectTitle.innerText = projectName;
}

// Assign task count
function assignTaskCount(taskNumber) {
    // Count tasks in project
    if (taskNumber === 1) {
        taskCount.innerText = `${taskNumber} task remaining`
    } else {
        taskCount.innerText = `${taskNumber} tasks remaining`
    }
}

// Find project in array based on ID
function findProjectById(projects, projectId) {
    const project = projects.find(project => project.id === projectId);
    return project;

}

// Exactly as the title says
function createTask(taskName, due) {
    return { id: Date.now().toString(), name: taskName, due: due };
}

// Render screen
function render() {

    // Clear and set project list
    clearElement(projectsContainer);
    renderProjects();

    if (selectedProjectId == null || selectedProjectId == '') {
        todoSection.style.display = 'none';
    } else {
        todoSection.style.display = '';
        let project = findProjectById(projects, selectedProjectId);
        renderTasks(project.tasks);

    }
}

// Refresh project name and task counter
function taskWindow(projectName, taskNumber){
    assignProjectList(projectName);
    assignTaskCount(taskNumber);
}

function renderProjects() {
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
}

function renderTasks(selectedList) {

    // Clear existing tasks
    clearElement(tasksContainer);

    // Render each task in list
    selectedList.forEach(task => {
        const taskElement = document.importNode(taskTemplate.content, true)
        const checkbox = taskElement.querySelector('input');
        const due = taskElement.querySelector('.due')
        checkbox.id = task.id;
        checkbox.checked = task.complete;
        const label = taskElement.querySelector('label');
        label.htmlfor = task.id;
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

render()

