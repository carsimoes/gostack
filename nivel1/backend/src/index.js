const express = require('express');
const cors = require('cors');
const { uuid, isUuid } = require('uuidv4');

const { request, response } = require('express');
const app = express();

app.use(cors());
app.use(express.json());

const projects = [];

function logRequests(request, resposnse, next){
    const {method, url} = request;
    const logLabel = `${method.toUpperCase()}] ${url}`;

    console.log(logLabel);

    return next();
}

function validadeProjectId(request, resposnse, next){
    const{id} =request.params;
    if(!isUuid(id))
        return response.status(400).json({error: "invalid id"});

    return next();
}

//app.use(logRequests);

app.get('/projects', (request, response) => {
    const {title}  = request.query;
    console.log(title);
    //console.log(name);

    return response.json(
        projects
    );
});

app.post('/projects', (request, response)=>{
    const {title, name} = request.body;
    
    const project = {id: uuid(), title, name};

    projects.push(project);

    return response.json(
     project
    );
});

app.put('/projects/:id',validadeProjectId, (request, response)=>{
    const parans = request.params;

    console.log(parans);

    return response.json(
        [
            'projeto 1',
            'projeto 2'
        ]
    );
});

app.delete('/projects/:id', validadeProjectId, (request, response)=>{
    const {id} = request.params;

    const projectIndex = projects.findIndex(project => project.id == id);

    if(projectIndex< 0)
    return response.status(404).json({error: 'not found'});

    projects.splice(projectIndex, 1);

    console.log(parans);

    return response.json(
        [
            'projeto 1',
            'projeto 2'
        ]
    );
});

app.listen(3333, () => {
    console.log('backend started!!');
});