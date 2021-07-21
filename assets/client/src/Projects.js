import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/api/projects')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(err => console.log(err));
            
    }, []);
    if (projects.length === 0) return <div>Chargement des projets...</div>;
    return (
        <Container fluid className="p-5">
            <h1 className="text-center"><b>Mes projets</b></h1>
            {projects.map(project => {
            return (
                <div key={"project-" + project.id} className="project-small-card">
                    <h1 className="text-center">{project.name}</h1>
                    <p>{project.description.substr(0, 80)} <Link to={{
                            pathname: `/project/${project.id}`,
                    }}>Voir plus</Link> </p>
                    <h3>Technologies</h3>
                    <div className="d-flex justify-content-evenly">
                    {project.technologies.map((tech, index) => index < 3 ? <p key={index}>{tech.name}</p> : null)}
                    {project.technologies.length > 3 ? <p key="default">et autres</p> : false}
                    </div>
                </div>
            )
            })}
        </Container>
    );
};

export default Projects;