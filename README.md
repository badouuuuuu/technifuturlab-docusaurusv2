# Docusaurus Technifutur TFF

[Docusaurus 2](https://docusaurus.io/)

## Utilisation du repo git
 
```sh
git clone https://github.com/badouuuuuu/technifuturlab-docusaurusv2.git
cd technifuturlab-docusuarusv2
```

## Installation 

```console
npm install
```

## Local Development

```console
npm start
```


## Crée votre branche

```sh
git branch votrenomdebranche
git checkout votrenomdebranche
```



## via Docker

Sous docker, le temps de déploiement est d'environs 5 minutes avant d'accèder au site web

```sh
docker run badouuuuuu/technifuturlab-docusaurusv2
```
Accessible ensuite sur : [http://localhost](http://localhost ) 

Si vous n'accédez pas a la page web, prenez l'ip du container :

```
docker ps
```
Notez l'id_container du container

```
docker inspect id_container | grep -i IPAddress
```

