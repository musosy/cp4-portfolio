import React, { useState, useEffect } from 'react';
import './Footer.css';
import Container from 'react-bootstrap/Container';

const Footer = () => {
    const [quote, setQuote] = useState('');
    const [error, setError] = useState(null);
    const availableName = ['Rest', 'West', 'Quest', 'Nest', 'Best'];
    const getQuote = async () => {
        await fetch('https://api.kanye.rest')
            .then(res => res.json())
            .then(json => setQuote(json))
            .catch(e => setError(e));
    }
    useEffect(() => {
        getQuote();
        setTimeout(getQuote, 60000);
    }, []);
    if (error) return <div className="error">{error.message}</div>;
    return (
        <Container fluid className="footer p-5">
            <div className="links">
                <h3 className="text-center">GitHub & Linkedin</h3>
                <div className="d-flex justify-content-evenly mt-3">
                    <a className="btn custom-link" href="https://www.linkedin.com/in/hugo-guillaume-53420b129/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin"></i> Linkedin</a>
                    <a className="btn custom-link" href="https://github.com/musosy" rel="noreferrer" target="_blank"><i className="fab fa-github"></i> Github</a>
                </div>
            </div>
            <div className="quote mt-5 text-center">
                <h4 className="">Citation du moment</h4>
                <p>
                    <b>{quote.quote}</b> - Kanye {availableName[Math.floor(Math.random()*5)]}
                </p>
                </div>
        </Container>
    )
}
export  default Footer;
