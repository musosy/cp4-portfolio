import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import './index.css';

const Contact = () => {
    const [contact, setContact] = useState({
        name: null,
        email: null,
        message: null,
    });
    const [error, setError] = useState({
        name: 'Nom requis',
        email: 'Email requis',
        message: 'Message requis',
    });
    const [submitted, setSubmitted] = useState(false);
    
    const onSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true);
        if (!(error.name || error.email || error.message)) {
            console.log(contact);
            await fetch('http://localhost:8000/api/contact', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contact: contact,
                }),
            })
            .then(response => response.json())
            .then(json => console.log(json))
            .then(() => setSubmitted(false))
            .catch(err => console.error(err));
        }
    }
    const handleNameChange = (e) => {
        setError({...error, name: ''});
        setContact({...contact, name: e.target.value});
        if (!e.target.value.length > 0) {
            setError({...error, name: 'Nom requis'});
        }
    }
    const handleEmailChange = (e) => {
        setError({...error, email: ''});
        setContact({...contact, email: e.target.value});
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.target.value)) {
            setError({...error, email: 'Adresse email invalide'});
        }
        if (!e.target.value.length > 0) {
            setError({...error, email: 'Email requis'});
        }
    }
    const handleMessageChange = (e) => {
        setError({...error, message: ''});
        setContact({...contact, message: e.target.value});
        if (!e.target.value.length > 0) {
            setError({...error, message: 'Message requis'});
        }
    }
    return (
        <Container fluid className="p-5">
            <h1 className="text-center">Contact</h1>
            <p className="text-center">Si vous désirez prendre contact avec moi, complétez les champs suivants:</p>
            <form>
                <div className="form-group mb-2">
                    <div className="label-error">
                        <label className="form-label">Nom</label> 
                        {submitted && error.name ? <p className="error-message"><i className="fas fa-exclamation-circle"></i> {error.name}</p> : false}
                    </div>
                    <input className="form-control" type="text" name="nom" onChange={handleNameChange}/>
                </div>
                <div className="form-group mb-2">
                    <div className="label-error">
                        <label className="form-label">Email</label> 
                        {submitted && error.email ? <p className="error-message"><i className="fas fa-exclamation-circle"></i> {error.email}</p> : false}
                    </div>
                    <input className="form-control" type="email" name="email" onChange={handleEmailChange}/>
                </div>
                <div className="form-group mb-2">
                    <div className="label-error">
                        <label className="form-label">Message</label> 
                        {submitted && error.message ? <p className="error-message"><i className="fas fa-exclamation-circle"></i> {error.message}</p> : false}
                    </div>
                    <textarea className="form-control" name="message" onChange={handleMessageChange}/>
                </div>
                <div className="text-center mt-3">

                    <button className="btn custom-link" type="submit" onClick={onSubmit}>Envoyer</button>
                </div>
            </form>
        </Container>
    );
};

export default Contact;