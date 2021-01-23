import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';
import car from './assets/car.jpg';

import Header from './components/Header';

//estado e imutabilidade

function App() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, 
    []);//array de dependencias

    async function handleAddProject(){
        // projects.push(`novo projeto ${Date.now()}` ) ;
        //setProjects([...projects, `novo projeto ${Date.now()}`]);
        //console.log(projects);

      const response = await api.post('projects', {
                title: `novo projeto ${Date.now()}`,
                name: "blz"
        });

     const project = response.data;
     setProjects([...projects, project]);
     
    };

    return (
            <>
               <Header title="home"/>
               {/* <img src={car}></img> */}
               <ul>
                       {
                        projects.map(project => <li key={project.id}>{project.title}</li>)
                       }
                </ul>

                <button type='button' onClick={handleAddProject}>add project</button>
            </>       
    );
} 
  
export default App;