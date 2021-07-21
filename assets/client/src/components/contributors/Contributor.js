import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Contributor = (props) => {
    const [contributor, setContributor] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:8000/api/contributors/show/${props.match.params.id}`)
            .then(response => response.json())
            .then(json => setContributor(json))
            .catch(err => console.log(err));
    } , [props.match.params.id]);
    if (contributor === null) return <div>Chargement du collaborateur ...</div>;
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