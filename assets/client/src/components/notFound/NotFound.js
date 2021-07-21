import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Redirect } from 'react-router-dom';
const NotFound = () => {
    const [redirect, setRedirect] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setRedirect(true);
        }, 5000);
    }, []);
    if (redirect) return <Redirect to='/' />;
    return (
        <Container fluid>
            <div className="not-found p-5 text-center">
                <h1>404 not found</h1>
                <p>La page demandée est introuvable ...</p>
            </div>
        </Container>
    )
}

export default NotFound;