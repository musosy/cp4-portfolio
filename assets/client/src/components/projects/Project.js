import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../loader/Loader';
import ErrorHandler from '../errorHandler/ErrorHandler';

const Project = (props) => {
    const [project, setProject] = useState(null);
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/api/projects/show/${props.match.params.id}`)
            .then(response => response.json())
            .then(json => setProject(json))
            .then(() => setIsloading(false))
            .catch(err => setError(err));
    } , [props.match.params.id]);
    if (error) return <ErrorHandler error={error} />;
    if (isLoading) return <Loader />;
    else return (
        <div className="project">
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <h3 className="mt-3">Technologies</h3>
            <div className="d-flex justify-content-evenly flex-wrap">
            {project.technologies.map(tech => <p>{tech.name}</p>)}
            </div>
            <h3 className="mt-3">Collaborateurs</h3>
            <div className="d-flex justify-content-evenly flex-wrap">
            {project.contributors.map(cont => <Link key={'contributor-' + cont.id} to={'/contributor/' + cont.id}>{cont.fullname}</Link>)}
            </div>
        </div>

    )
}
export default Project;