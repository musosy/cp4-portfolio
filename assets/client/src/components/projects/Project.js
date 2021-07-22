import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../loader/Loader';
import ErrorHandler from '../errorHandler/ErrorHandler';

const Project = (props) => {
    const [project, setProject] = useState(null);
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState(null);
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/api/projects/show/${props.match.params.id}`)
            .then(response => response.json())
            .then(json => setProject(json))
            .then(() => setIsloading(false))
            .catch(err => setError(err))

    } , [props.match.params.id]);

    useEffect(() => {
        //fetch images once the project is loaded
        if (project && !isLoading) {
            fetch('http://localhost:8000/api/image/' + project.images[0].id)
                .then(response => response.blob())
                .then(blob => setImages([URL.createObjectURL(blob)]))
                .catch(err => console.log(err))
            
        }
    }, [project, isLoading]);
    console.log(images);
    if (error) return <ErrorHandler error={error} />;
    if (isLoading) return <Loader />;
    else return (
        <div className="project">
            <h1 className="text-center"><b>{project.name}</b></h1>
            <p>{project.description}</p>
            <h2 className="mt-5">Technologies</h2>
            <div className="d-flex justify-content-evenly flex-wrap">
            {project.technologies.map(tech => <p key={"techno-" + tech.id} className="mx-2">{tech.name}</p>)}
            </div>
            <h2 className="mt-5">Collaborateurs</h2>
            <div className="d-flex justify-content-evenly flex-wrap">
                {project.contributors.map(cont => <Link className="custom-link btn mx-2 my-2" key={'contributor-' + cont.id} to={'/contributor/' + cont.id}>{cont.fullname}</Link>)}
            </div>
        </div>
    )
}
export default Project;