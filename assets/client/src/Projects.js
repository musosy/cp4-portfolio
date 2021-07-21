import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Project from './components/projects/Project'

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/api/projects')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                return setProjects(data)})
            .catch(err => console.log(err));
            
    }, []);
    return (
        <Container fluid className="p-5">
            <h1 className="text-center"><b>Mes projets</b></h1>
            {projects.map(project => <Project project={project} key={project.id}/>)}
        </Container>
    );
};

export default Projects;