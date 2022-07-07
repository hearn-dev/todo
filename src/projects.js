// Initialize projects folder
export let projects = {
    list: []};

export let selectedProjectId = {
    id:''
};

// Initialize new projects with unique id
export function createProject(name) {
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

// Find project in array based on ID
export function findProjectById(projectId) {
    let list = projects.list;
    const project = list.find(project => project.id === projectId);
    return project;

}

