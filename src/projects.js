// Initialize projects folder
export let projects = {
    list: []};

export let selectedProjectId = {
    id:''
};

// Initialize new projects with unique id
export function createProject(name) {
    return { id: Date.now().toString(), name: name, tasks: []}
}

// Find project in array based on ID
export function findProjectById(projectId) {
    let list = projects.list;
    const project = list.find(project => project.id === projectId);
    return project;

}

