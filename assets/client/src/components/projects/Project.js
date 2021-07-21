import React from 'react';

const Project = (props) => {
    const project = props.project;
    return (
        <div className="project">
            {project.name}
        </div>
    )
}

export default Project;