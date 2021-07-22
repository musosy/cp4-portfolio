import React from 'react';
import Container from 'react-bootstrap/Container';

const About = () => {
    return (
        <Container fluid className="p-5">
            <h1 className="text-center">À propos</h1>
            <h3 className="text-center mt-3 mb-3">Cette page est consacrée à l'explication du fonctionnement du site.</h3>
            <div>
                <h4 className="text-center"><u>Description du site:</u></h4>
                <p>Ce site est divisé en deux parties: un back-end en Symfony et un front en twig et React.</p>
                <p>La partie administrateur est uniquement réalisée en Symfony avec des renders Twig proposant un CRUD pour chacune des entités présentes en base de donnée. Les controllers récupèrent et gèrent les entités en fonction des requêtes de l'admnistrateur. Ces actions sont protégées par un système de login et une sécurisation des routes.</p>
                <p>La partie client est réalisée en React et propose uniqument la visualisation des données entrées par l'administrateur. Un controller Symfony est spécifiquement utilisé comme API avec différents endpoints renvoyant les données. Ces données sont préalablements traitées avec un middleware afin de remédier au problème de référence circulaire créé par Doctrine.</p>
                <h4 className="mt-3 mb-3 text-center"><u>Stack technique:</u></h4>
                <div className="d-flex flex-wrap justify-content-evenly">
                    <p>Symfony (PHP)</p><p>Doctrine</p><p>Twig</p><p>React (JS)</p><p>SQL</p><p>API</p>
                </div>
            </div>
        </Container>
    );
};

export default About;