import './style.css';


const projectsContainer = document.querySelector('[data-projects]');
const newProjectForm = document.querySelector('[data-new-project-form');
const newProjectInput = document.querySelector('[data-new-project-input]');
let selectedProjectId;


const projects = [{
    id: 1,
    name: 'books'
    }, {
    id: 2,
    name: 'chores'
    }, {
    id: 3,
    name: 'groceries'
}];

projectsContainer.addEventListener('click', e => {
        if (e.target.tagName.toLowerCase() === 'li') {
            selectedProjectId = e.target.dataset.projectId;
            console.log(selectedProjectId);
            render();
        }
    }
)

newProjectForm.addEventListener('submit', e => {
    e.preventDefault();
    const projectName = newProjectInput.value;
    if (projectName == null || projectName === '') return;
    const project = createProject(projectName)
    newProjectInput.value = null;
    projects.push(project);
    render();

});


function createProject(name) {
    return { id: Date.now().toString(), name: name, tasks: []}
}


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

}

function addProject() {

}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

render()