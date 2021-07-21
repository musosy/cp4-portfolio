import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../loader/Loader';
import ErrorHandler from '../errorHandler/ErrorHandler';

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
    } , [props.match.params.id]);
    if (error) return <ErrorHandler error={error} />;
    if (isLoading) return <Loader />;
    return (
        <div className="contributor">
            <h1>{contributor.fullname}</h1>
            <div className="d-flex flex-column">
                <a href={contributor.website} rel="noreferrer" target="_blank">Website</a>
                <a href={contributor.linkedin} rel="noreferrer" target="_blank">Linkedin</a>
                <a href={contributor.github} rel="noreferrer" target="_blank">Github</a>
            </div>
            <h3 className="mt-3">Contributions</h3>
            {contributor.projects.map(project => <Link to={'/project/' + project.id}>{project.name}</Link>)}
        </div>

    )
}
export default Contributor;