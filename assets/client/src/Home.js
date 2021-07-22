import React from 'react';
import Container from 'react-bootstrap/Container';
import './index.css';
const Home = () => {
    return (
        <Container fluid className="home p-5">
            <h1 className="text-center"><b>Bienvenue sur le portfolio d'Hugo Guillaume</b></h1>
            <Container fluid className="mt-5">
                <h2 className="text-center"><u>En bref:</u></h2>
                <p>Initialement diplomé d'École d'ingénieur, je me suis reconvertie dans le développement web au printemps en rejoignant la Wild Code School. Après 5 mois de formation intensive, je suis à la rechercher d'un premier emploi / stage / alternance afin de mettre en pratique les connaissances acquises.</p>
                <h2 className="text-center mt-5"><u>Mon stack technique:</u></h2> 
                <p>Initié avec du <b>PHP</b> orienté objet avec une architecture MVC et une base de donnée <b>SQL</b>, j'ai eu l'opportunité d'utiliser <b>Symfony</b> pour un projet client de "compagnon app" pour un Escape Game. Pour des projets personnels, j'ai pu me former en Javascript et à <b>React</b>, <b>Node.js</b> (Express) et MongoDB (NoSQL).</p>
                <p>Grâce à plusieurs projets, j'ai pu utiliser <b>GitHub</b> pour collaborer avec d'autre développeurs juniors (cf les collaborateurs des projets proposés) et travailler en <b>méthode AGILE</b> (SCRUM). L'utilisation et la création d'<b>API</b> à aussi été de la partie.</p>
                <h2 className="text-center mt-5"><u>Mes passions:</u></h2>
                <p>Hormis la programmation, je suis aussi passionné de musique. Musicien depuis un jeune âge, je suis actuellement membre d'une <a className="text-link" href="https://www.instagram.com/mamievortex/" rel="noreferrer" target="_blank">Fanfare-techno</a> en tant que tomboniste.</p>
                <p>J'ai également participer à un projet solidaire en Amérique Latine qui avait pour but de donner à des enfants en difficulté (problème de concentration, drogue etc) l'opportunité de s'épanouir grâce à la musique.</p>
                <h2 className="text-center mt-5"><u>Mon cv</u></h2>
                <div className="text-center" >
                    <a href="https://drive.google.com/file/d/1S8CL2JW0m4nn9cfpgmTsSjkchqEIr9Rh/view?usp=sharing" className="btn custom-link" target="_blank" rel="noreferrer">Consulter mon CV</a>
                </div>
            </Container>
        </Container>
    );
};

export default Home;