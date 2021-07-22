import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Loader from '../loader/Loader';
import ErrorHandler from '../errorHandler/ErrorHandler';
import './Contributor.css';

const Contributor = (props) => {
    const [contributor, setContributor] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/api/contributors/show/${props.match.params.id}`)
            .then(response => response.json())
            .then(json => setContributor(json))
            .then(() => setIsLoading(false))
            .catch(err => setError(err));
        
    } , [props.match.params.id,]);
    if (error) return <ErrorHandler error={error} />;
    if (isLoading) return <Loader />;
    return (
        <Container key={"contributor-" + contributor.id} fluid className="d-flex flex-column align-items-center">
            <div className="contributor text-center">
                <h1>{contributor.fullname}</h1>
                <div className="d-flex flex-column">
                    <a className="cont-link" href={contributor.website} rel="noreferrer" target="_blank"><i className="fas fa-globe"></i> Website</a>
                    <a className="cont-link" href={contributor.linkedin} rel="noreferrer" target="_blank"><i className="fab fa-linkedin"></i> Linkedin</a>
                    <a className="cont-link" href={contributor.github} rel="noreferrer" target="_blank"><i className="fab fa-github"></i> Github</a>
                </div>
                <h2 className="mt-5">Contributions <i className="fas fa-project-diagram"></i></h2>
                {contributor.projects.map(project => <Link className="btn cont-proj" to={'/project/' + project.id}>{project.name}</Link>)}
            </div>
        </Container>

    )
}
export default Contributor;