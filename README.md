# Portfolio

Bienvenu sur mon portfolio. Vous trouverez ici les prémices du projet final. Cette version utilise Symfony comme framework pour l'administration mais aussi en tant qu'API avec un front-end en React.

## Installation

Suivez les instructions suivantes pour démarrer correctement le repo: 

```bash
bin/console d:d:c
```
```bash
bin/console m:migration
```
```bash
bin/console doctrine:migration:migrates
```
```bash
bin/console d:f:l
```
```bash
symfony server:start
```

Puis dans un nouveau terminal, retournez à la racine du projet et entrez les commandes suivantes:

```bash
cd assets/client
```
```bash
npm start
```

## À propos
### Technologies
- BACKEND: Symfony / Doctrine / SQL
- FRONTEND: Symfony / React