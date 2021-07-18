---
slug: minikube
title: Installation Minikube dans une VM !
author: DanielBaks
author_title: Daniel Bakshendeh
author_url: https://github.com/DanielBaks
author_image_url: https://meetanentrepreneur.lu/wp-content/uploads/2019/08/profil-linkedin.jpg

tags: [docker-compose, docker, minikube, k8s, kubernetes cours]
---

Voici comment j'ai installer minikube dans une VM!

# Instalation sur Python 
```
apt install python3-pip
pip3 install -r requirements.txt
python3 app.py
```

# Docker
```
docker run -d -p 5000:5000 danielbaks/flask-tff
```
# Installation Minikube sur K8s serveur 
 
## Desactivation du swap 

1. Se connecter a la Debian en sudo 
2. Edition du ficher grub 

```
nano /etc/default/grub 
```

```
GRUB_CMDLINE_LINUX="cgroup_enable=memory swapaccount=1"
```
3. Mettre a jour le grub

```
sudo update-grub 
```

4.Miniube dans une VM: 

Pour faire fonctioner Minikube dans une VM il faut désactiver les drivers, cela permettra à Minikube d'utiliser les drivers de l'hyperviseur :

```
sudo apt-get install -y conntrack
cd /usr/bin/
ln -s /usr/sbin/conntrack conntrac
```

5. Lancer Minikube

```
minikube start --driver=none
```
