import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Redirect } from 'react-router-dom';
const ErrorHandler = (props) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [redirect, setRedirect] = useState(false);
    useEffect(() => {
        switch (props.error.name) {
            case 'NotFoundError':
                setErrorMessage('Les ressources demandées sont manquantes.');
                break;
            case 'SyntaxError':
                setErrorMessage('Les ressources demandées n\'existent pas.');
                break;
            case 'TypeError':
                setErrorMessage('Le serveur ne répond pas.');
                break;
            default:
                setErrorMessage('Une erreur est survenue.');
                break;
        }
    }, [props.error]);
    useEffect(() => {
        setTimeout(() => {
            setRedirect(true);
        }, 5000);
    }, []);
    if (redirect) return <Redirect to='/' />;
    return (
        <Container fluid>
            <div className="error-handler p-5 text-center">
                <h1>{errorMessage}</h1>
            </div>
        </Container>        
    )
}

export default ErrorHandler;