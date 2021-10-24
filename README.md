This repo is used for Wild Code School Express quests

# Setup

Vous allez refactoriser votre code API en suivant quelque chose de très similaire à l'architecture MVC, une manière d'organiser le code utilisé par de nombreux frameworks Web et que tout développeur Web devrait connaître.

request > controllers > get data > model > controllers > get presentation > view > controllers > response > users

Modèle : Où nous effectuons la manipulation, la persistance et la validation des données
Vue : Où nous formatons et présentons les données à l'utilisateur
Contrôleur : où les demandes des utilisateurs sont traitées 


## Install dependencies
```sh
npm i
```
## Create your environment variables

Create a copy of the `.env.sample` file named `.env` : 

```
cp .env.sample .env
```

Then adjust variables in `.env` to match your own environment.

# Run the app

When developping, to automatically restart the server on file changes : 

```sh
npm run dev
```

If you don't need automatic reloadings, you can just : 

```sh
npm start
```

