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
const homeButton = document.querySelector('[data-home-button]');
const clearCompleteTasksButtons = document.querySelector('[data-clear-complete-tasks-button]');
const deleteListButton = document.querySelector('[data-delete-list-button]')
let selectedProjectId;
let selectedTaskId;


// Initialize projects folder
let projects = [];

// Select project when clicked
projectsContainer.addEventListener('click', e => {

        // Target clicked items
        if (e.target.tagName.toLowerCase() === 'li') {

            // Determine id of clicked project
            selectedProjectId = e.target.dataset.projectId;

            // Find and assign project
            const project = findProjectById(projects, selectedProjectId)
 
            // Assign name of project and task list count
            taskWindow(project);
            render();
        }
    }
)

// update Task count when task crossed off
tasksContainer.addEventListener('click', e => {

    if (e.target.tagName.toLowerCase() === 'input') {
        const project = findProjectById(projects, selectedProjectId);
        const selectedTask = project.tasks.find(task => task.id === e.target.id)
        selectedTask.complete = e.target.checked;
        assignTaskCount(project);
    }

  
})

clearCompleteTasksButtons.addEventListener('click', e => {
    const selectedList = findProjectById(projects, selectedProjectId);
    console.log(selectedList.tasks)
    selectedList.tasks = selectedList.tasks.filter(task => !task.complete);
    render();
})

deleteListButton.addEventListener('click', e => {
    projects = projects.filter(project => project.id !== selectedProjectId)
    selectedProjectId = null;
    render();
})
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
    taskWindow(project);

    render();

});

// Create new task when form submitted
newTaskForm.addEventListener('submit', e => {
    e.preventDefault();

    // Assign task name and due date
    const taskName = newTaskInput.value;
    // const taskDue = newTaskDateInput.value;

    // Stop if form empty
    if (taskName == null || taskName === '') return;

    // Create task if form filled
    const task = createTask(taskName)

    // Clear form
    newTaskInput.value = null;
    // newTaskDateInput.value = null

    // Cache task
    const project = findProjectById(projects, selectedProjectId);
    project.tasks.push(task);

    // Render task window
    assignTaskCount(project);
    render();

});

// Initialize new projects with unique id
function createProject(name) {
    return { id: Date.now().toString(), name: name, tasks: [{
        id:'aljhsd',
        name: 'Test',
        complete: false
    }, {
        id:'aljhas',
        name: 'Test 2',
        complete: true
    }]}
}

// Assign project name and task count to task list
function assignProjectList(project) {

    // Clear tasks
    clearElement(tasksContainer);

    // Assign project title to list
    taskProjectTitle.innerText = project.name;
}

// Assign task count
function assignTaskCount(project) {

    const incomplete = project.tasks.filter(task => !task.complete).length;

    // Count tasks in project
    if (incomplete === 1) {
        taskCount.innerText = `${incomplete} task remaining`
    } else {
        taskCount.innerText = `${incomplete} tasks remaining`
    }
}

// Find project in array based on ID
function findProjectById(projects, projectId) {
    const project = projects.find(project => project.id === projectId);
    return project;

}

// Exactly as the title says
function createTask(taskName) {
    return { id: Date.now().toString(), name: taskName, complete: false };
}

// Render screen
function render() {

    // Clear and set project list
    clearElement(projectsContainer);
    renderProjects();

    if (selectedProjectId == null || selectedProjectId == '') {
        todoSection.style.display = 'none';
    }else if (selectedProjectId == 'home') {
        todoSection.style.display = '';
        taskProjectTitle.innerText = "Home";
    } else {
        todoSection.style.display = '';
        let project = findProjectById(projects, selectedProjectId);
        renderTasks(project.tasks);

    }
}

// Refresh project name and task counter
function taskWindow(project){
    assignProjectList(project);
    assignTaskCount(project);
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
    if (selectedProjectId != 'home'){
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
        // due.textContent = task.due;
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

