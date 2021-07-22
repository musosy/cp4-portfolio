import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Loader from './components/loader/Loader';
import ErrorHandler from './components/errorHandler/ErrorHandler';
import './components/projects/Project.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/api/projects')
            .then(response => response.json())
            .then(data => setProjects(data))
            .then(() => setIsloading(false))
            .catch(err => setError(err));
            
    }, []);
    if (error) return <ErrorHandler error={error} />;
    if (isLoading) return <Loader />;
    return (
        <Container fluid className="p-5">
            <h1 className="text-center"><b>Mes projets</b></h1>
            {projects.map(project => {
            return (
                <div key={"project-" + project.id} className="project-small-card">
                    <h1 className="text-center">{project.name}</h1>
                    <p>{project.description.substr(0, 80)} </p>
                    <h3>Technologies</h3>
                    <div className="d-flex justify-content-evenly">
                    {project.technologies.map((tech, index) => index < 3 ? <p key={index}>{tech.name}</p> : null)}
                    {project.technologies.length > 3 ? <p key="default">et autres</p> : false}
                    </div>
                    <div className="text-center">

                    <Link className="btn custom-link" to={{
                        pathname: `/project/${project.id}`,
                    }}>Voir plus</Link> 
                    </div>
                </div>
            )
            })}
        </Container>
    );
};

export default Projects;