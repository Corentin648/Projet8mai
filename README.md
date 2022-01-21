# Projet 8 Mai

Ce site web a pour but de présenter l'association **Patrimoine Véhicules Anciens**, <br/>
et en particulier leur évènement annuel du **8 Mai à Casson**.

## Prérequis

### Installer un logiciel pour programmer

Il y a plusieurs logiciels performants permettant de développer des applications web. <br/>
Dans notre cas, le plus simple est d'utiliser un IDE adapté contenant déjà tous les outils nécessaires à la
programmation de notre site. <br/>

Nous pouvons par exemple utilser un logiciel de la suite **JetBrains** comme **WebStorm** qui est gratuit. Pour
l'installer, on peut suivre le tutoriel suivant : <br/>
[https://www.jetbrains.com/help/webstorm/installation-guide.html#toolbox](https://www.jetbrains.com/help/webstorm/installation-guide.html#toolbox)
.

### Installer les paquets nécessaires au développement de l'application

- nvm
- npm

*la suite à venir...*

## Tester le projet

```
# Cloner le repo github
git clone https://github.com/Corentin648/Projet8mai.git

# Installer les dépendances
npm install
```

Les dépendances sont ajoutées dans le répertoire `/node_modules` depuis la racine du projet.

### Lancer en développement

```
# Lancer le serveur
npm start
```

Ouvrir ensuite [http://localhost:3000](http://localhost:3000) pour voir le rendu.

### Déployer en production

```
# Déployer le projet
npm run build
```

Le build se trouve alors dans le répertoire `/build` depuis la racine du projet.

### Placer le build sur un serveur à distance

Pour un serveur **Apache 2**, il suffit de placer le `/build` dans le répertoire de déploiement du serveur. <br/>
Nous utiliserons ici `/var/html/www`, répertoire de déploiement par défaut. Ainsi, on peut utilisr la commande
suivante :

```
# Placer le projet sur un serveur
sudo scp -r /chemin/absolu/du/build root@ipduserveur:/var/www/html
```