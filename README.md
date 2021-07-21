# Portfolio

Bienvenu sur mon portfolio. Vous trouverez ici les prémices du projet final. Cette version utilise Symfony comme framework pour l'administration mais aussi en tant qu'API avec un front-end en React.

## Installation

Suivez les instructions suivantes pour démarrer correctement le repo: 

```bash
bin/console d:d:c
bin/console m:migration
bin/console doctrine:migration:migrates
bin/console d:f:l
symfony server:start
```

Puis dans un nouveau terminal, retournez à la racine du projet puis:

```bash
cd assets/client
npm start
```