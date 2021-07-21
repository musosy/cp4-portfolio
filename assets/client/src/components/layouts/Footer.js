import React, { useState, useEffect } from 'react';
import './Footer.css';
import Container from 'react-bootstrap/Container';

const Footer = () => {
    const [quote, setQuote] = useState('');
    const [error, setError] = useState(null);
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
        <Container fluid>
            <div className="quote"><b>{quote.quote}</b> - Kayne Rest</div>
        </Container>
    )
}
export  default Footer;
