---
sidebar_position: 1
---

# Bienvenue ! 

Bienvenue dans mon petit laboratoire.
Je te présente docusaurus, un outil super sympas sous ReactJS qui te permettra de
t'initier aux joies du développement de manière basique, tout en abordant plusieurs concept
intéressant :

- Javacript
- Web Developpement
- le balisage
- NodeJS et serveur
- Organisation de tes fichier

:::tip Découvrons celà en **moins de 5 minutes**

**Je vous proposes de déployer votre docusaurus personnel, et de partir a l'aventure la doc !**

## Commençons

Il est temps de créer notre **nouveau site web**

## Création d'un nouveau site web

Installation de NodeJS & NPM 

```shell
sudo apt install nodejs npm
```

```shell
npx @docusaurus/init@latest init monsiteweb bootstrap
```

Pour générer un nouveau template Docusaurus vous avez le choix entre **deux templates** :


- classic
- bootstrap

```shell
npx @docusaurus/init@latest init monsiteweb bootstrap
```

j'utilise personellement la version avec bootstrap pré-intégré, a vous de choisir !

## Démarrez votre serveur NodeJS

Docusaurus est un outil crée sous ReactJS.
ReactJS est un framework "a complété"...

Pour celà, nous avons besoin de démarrer notre serveur afin d'accéder a notre site web Docusaurus !

Lancez le serveur de développement :

```shell
cd monsiteweb

npx docusaurus start
```

Vous pouvez accédès au site via : `http://localhost:3000`.

Ouvez `docs/intro.md` et éditez quelques lignes: le site **recharchera automatiquement** et **affichera** vos changements a chaques enregistrement !

Les joies de NodeJS !
