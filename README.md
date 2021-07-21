# Portfolio

Bienvenu sur mon portfolio. Vous trouverez ici les prémices du projet final. Cette version utilise Symfony comme framework pour l'administration mais aussi en tant qu'API avec un front-end en React.

## Installation

Suivez les instructions suivantes pour démarrer correctement le repo: 

```bash
php bin/console d:d:c
```
```bash
php bin/console m:migration
```
```bash
php bin/console doctrine:migration:migrates
```
```bash
php bin/console d:f:l
```
```bash
symfony server:start
```

Assurez d'avoir dans le dossier assets/clients un fichier .env contenant la ligne suivante: 
```bash
SKIP_PREFLIGHT_CHECK=true
```

Puis dans un nouveau terminal, retournez à la racine du projet et entrez les commandes suivantes:

```bash
cd assets/client
```
```bash
npm start
```

## À propos
### Double utilisation de Symfony
Dans ce repo, Symfony est à la fois utilisé de façon classique et comme API. Dans façon classique pour la partie administrateur permettant d'update la base de données avec des templates quasiment statiques et un CRUD fonctionnel pour chaque entité.

Pour la partie 'client', Symfony est utilisé commme une API pour récupérer les données qui sont préalablement sérialisées à cause des références circulaires des relations ManyToMany (Doctrine).

### Client React
Le framework React est utilisé pour la partie 'client' qui sert uniquement à récupérer les données. Les components sont uniquement procéduraux (functional component) et utilisent 2 Hooks (useState, useEffect) ainsi que les components de 'react-bootstrap'.