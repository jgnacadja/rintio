---
title: API, l'ouverture des SI dans un monde de micro services
published: true
categories: ["A la Une / Rintio Stories"]
date: 2020-07-28
coverImage: /img/articles/programmers_concept_with_flat_.png
---

## API : l'ouverture des SI dans un monde de micro services

Parce qu’elles interconnectent les systèmes dans un monde de plus en plus ouvert et décloisonné, les APIs, ces interfaces de programmation, forment aujourd’hui l’un des principaux moteurs des vastes projets de modernisation des SI des entreprises. Les APIs deviennent le mot à la mode quand on aborde la problématique d’agrégation et d’intégration de données et de services.

Les entreprises dans le monde s’adosseront aux APIs pour motoriser leur SI, et par extension leur modèle économique.

Rintio utilise cette nouvelle méthode et technologie pour l’intégration et le développement de ses applications et services.

Il a également validé de puissants et nombreux algorithmes et processus lui permettant de répondre aux exigences de son métier.La plupart de ces fonctions est déjà disponible comme service et est particulièrement stable.

Il suffit d’exposer ces fonctions au travers d’API pour qu’elles puissent interagir avec de nouveaux micro-services venant apporter la souplesse et l’évolutivité nécessaire à une transformation numérique réussie.

A la racine du développement de ces nouvelles applications conçues autour de micro-services se trouvent les API.

On peut regarder les API comme le contrat initial définissant l’information à fournir et la base syntaxique sur laquelle l’information est fournie. Dans le respect de ce contrat, un ou plusieurs nouveaux micro-services peuvent être créés, modifiés, supprimés sans impacter d’aucune manière les autres projets.

Au-delà de cette flexibilité qui permet, à peu de frais, la mise en place d’une démarche de type essai-erreur, le succès de ces micro-services repose sur les épaules de toutes petites équipes agiles.

Le principe du micro-service injecte de la flexibilité à un Système d’Information encore trop souvent monolithique.

Une méthode à laquelle devrait songer toute entreprise qui souhaite se réorganiser autour de sa transformation numérique.

Rintio l’a adoptée et en est aujourd’hui satisfait…

# Quelle place pour les APIs dans une architecture de microservices

Les microservices représentent une refonte complète du design applicatif ainsi que du déploiement d’applications.

Une architecture de microservices peut impliquer de nombreux services, comme des VM, des conteneurs, des APIs, des services de load balancing, de monitoring ainsi que des outils d’automatisation, mais aussi d’autres éléments conçus pour renforcer la cohérence de l’application.

Toutefois, en dépit de ce principe, chaque élément fonctionnel peut exister indépendamment des autres.Les fournisseurs de services Cloud, comme AWS par exemple, se sont mis à développer une liste de services qui fonctionnent avec des projets de microservices, comme les conteneurs, la gestion d’événement ou encore la gestion d’APIs.

Bien que les microservices montent aujourd’hui en puissance, cette approche n’est pourtant pas adaptée à toutes les applications. Les développeurs doivent ainsi bien comprendre le principe des microservices, démarrer petit et employer l’architecture microservices lorsque cela fait sens.Les APIs sont devenues un moyen clé pour que les services Cloud s’échangent des informations et fonctionnent de concert pour au final créer une fonctionnalité ou un groupe de fonctions.

Avec les microservices, une application est conçue et implémentée comme un groupe de composants pouvant être dimensionnés, plutôt que comme une unique entité monolithique.

Une API peut par exemple permettre à des workloads dans plusieurs conteneurs de partager des données, de prendre en compte les entrées des utilisateurs et de gérer les sorties (pour être stockées ou pour être dirigées vers des services de reporting). Les APIs peuvent également permettre aux applets côté client de communiquer avec les applications côté serveurs, même lorsque ces composants applicatifs sont hébergés dans un Cloud public.

# API : Comment automatiser la génération de code

Les APIs sont certes devenues un composante clé des architectures logicielles, les développeurs peinent encore à les façonner.

En cause : l’écart entre la publication de la documentation et celle des spécifications.

Brad Irby nous fait part d’un outil qui permet d’automatiser la génération de code.

Les APIs sont devenues très à la mode chez les développeurs. Mais en dépit de cette notoriété, ceux-ci doivent encore livrer bataille lorsqu’il s’agit de générer le code de l’API à cause de décalage entre la documentation et les demandes des chefs de produits.

Dans cet article, je vous explique comment Swagger peut aider à maintenir une cohérence entre la documentation et le code, tout le long du processus de création d’une application.

Nous sommes d’accord sur le fait que les APIs sont un outil formidable, mais leur création reste encore une tâche qui n’est pas aisée. Il est nécessaire de prendre en compte nombre de détails.

Mais il est également facile de perdre de vue certains de ces détails, lorsque l’on traduit l’idée de départ d’un chef de produit dans une série de documents détaillant les specs, puis enfin en ligne de code. Grâce à Swagger, synchroniser les docs avec le code est devenu plus simple.

Swagger est un outil qui permet à quiconque disposant d’un minimum de compétences techniques de définir une API, de générer la documentation et même de générer le code.

L’API est conçue au sien d’un éditeur en ligne via YALM, un langage XML très lisible.

Celui-ci définit les endpoints, puis le format des paramètres d’entrée et de sortie des données, le niveau de sécurité que vous souhaitez implémenter.

Et c’est prêt à être utilisé.

L’éditeur Swagger vous propose un exemple reposant sur l’API d’Instagram (Figure 1).

Dans l’éditeur, sélectionnez « File », puis « Open Example ». D’autres exemples sont également disponibles.

Figure 1 : L’API d’Instagram comme exemple

Parmi les données de l’illustration ci-dessus, 8 paths ont été définis. On clique sur le petit triangle pour dérouler les nœuds. Lorsque vous en ouvrez un (Figure 2), on constate que cela nécessite GET HTTP. Vous pouvez consulter la description et constater qu’il requiert 3 paramètres. Si cela marche, il retourne un array d’objets.

Figure 2 : Un path complet

De même, vous pouvez ouvrir la définition Media, et consulter les détails des propriétés de cet objet, comme les objets imbriqués (je ne montre qu’une partie de la définition dans la Figure 3

Figure 3 : Une vue partielle de la définition Media

Définir une API avec l’éditeur Swagger est pratique, mais pas plus facile que d’utiliser d’autres outils.

Toutefois, dans le panneau de droite de l’éditeur, la documentation HTML est générée automatiquement. (Figure 4).

Elle apparait complète, agréable à lire et vous propose de tester les appels.

En cliquant sur le bouton « Try this operation », vous pouvez saisir des paramètres, effectuer l’appel et observer le résultat.

Figure 4 : La documentation est générée automatiquement

Mais ce n’est finalement pas cela qui rend cet outil le plus indispensable. En vous appuyant sur les options « Generate Server » et « Generate Client » (Figure 5), vous pouvez générer le code pour publier et consommer cette API en plusieurs langages. A lui seul, cet outil de génération de code peut vous faire économiser des heures de programmations fastidieuses, sans parler du temps nécessaire à effectuer des modifications tout le long du cycle de vie de votre API. Vous pouvez également exporter le code pour créer un fichier en local et ainsi mieux contrôler les sources. Ce fichier peut aussi être publié pour que d’autres développeurs puissent intégrer rapidement vos données.

Figure 5 : Utiliser les options « Generate Server » et « Generate Client »

Rédiger une API est certes très utile mais aussi très chronophage.

La concevoir avec Swagger et publier le fichier YAML peut faciliter vos processus internes et votre collaboration avec d’autres.

# Construire correctement une interface de programmation

Ne faites pas capoter tout votre projet d’API. Bien connaître les applications permet notamment de fixer la conception et d’encourager la fidélité des développeurs.

Dans un contexte de logiciels interactifs et fractionnés en de nombreux composants, rien n’est plus important que les interfaces de programmation d’applications(API) utilisées pour relier ces composants entre eux, ainsi qu’aux appareils mobiles et aux navigateurs . Bien conçue, une API permet de garantir l’intégration fonctionnelle et la fidélité des développeurs ; mal conçue, elle peut faire échouer tout un projet.

Trois facteurs permettent de rester du bon côté de la force en matière de création d’API :
-Connaitre les applications et leurs contraintes d’utilisation

–S’intéresser à l’architecture de composants et à l’infrastructure de liaison

– Et enfin s’assurer d’une bonne gestion des changements

Les API présentent les fonctionnalités et les services aux développeurs. Le mode d’utilisation d’une API et la gamme des services représentés constituent les principaux moteurs de son développement. L’une des erreurs les plus importantes commises par les développeurs et les architectes lors de la création d’API consiste à ignorer un élément déterminant. Il est vital que la conception d’une API s’intègre parfaitement dans l’écosystème des développeurs, des langages et des autres API.

# Problèmes courants de conception d’API

Le débat REST contre SOAP constitue un exemple de cadre contraignant pour les API. Lorsque des applications dépendent déjà des unes ou des autres, toute nouvelle API doit évidemment se fondre dans le moule. Ce qui est moins évident, c’est que la plupart des API font partie d’une tendance allant vers le fractionnement en composants et la divulgation des fonctionnalités. Ce mouvement peut, au fil du temps, orienter un ensemble d’API vers REST ou SOAP ; une migration qu’il faut donc absolument anticiper.

Les problèmes de constitution des API peuvent détruire une application plus vite et plus radicalement que tout autre type d’erreur d’architecture.

Les architectes risquent d’être facilement échaudés s’ils se conforment à l’architecture objet et à l’infrastructure de liaison. Il est important de choisir le bon modèle d’API car les développeurs ont du mal à utiliser une interface non conforme à l’architecture des applications qu’ils mettent au point. Remarquez que les API RESTful représentent généralement des ressources, tandis que les API SOAP représentent des processus ou procédures distant(e)s.

Un protocole peut servir à lier les API à leurs utilisateurs et aux applications Web ; il s’agit en principe du tandem HTTP (Hypertext Transfer Protocol)/HTTPS. L’utilisation du protocole HTTP avec un format de données HML (Hypertext Markup Language) ou XML (eXtensible Markup Language), ou encore JSON (JavaScript Object Notation) et JavaScript sur les appareils clients, facilite la création d’interfaces utilisateur graphiques à partir d’une API. En revanche, il peut ne pas convenir lorsque l’accès au navigateur n’est pas l’objectif de l’application. Certaines applications et API peuvent utiliser un port TCP (Transmission Control Protocol) ou UDP (User Datagram Protocol) particulier au lieu du port Web 80.

Ce dispositif contribue certes à séparer le trafic des API de l’activité Web, mais les conséquences au niveau du pare-feu ou de la sécurité risquent d’exiger une configuration système spéciale entraînant une exposition des API ou leur utilisation à distance .

# Règles générales en matière de conception d’API

On peut considérer que la plupart des API forment une syntaxe de verbes et de noms. Par exemple, on a une phrase avec un verbe représentant une action demandée (get, put, delete) et des noms désignant les arguments qui s’appliquent à l’action. Une bonne pratique consiste à toujours générer une variable d’état/de résultat qui indique les conditions d’erreur ou la réussite de l’exécution. Les conditions d’erreur doivent être suffisamment précises pour décrire les problèmes sans ambigüité.

La sémantique de l’API, c’est-à-dire la syntaxe des fonctions fournies, est importante car la capacité de l’API à transmettre clairement ses services et paramètres évite aux développeurs de commettre des erreurs. Si l’API représente un service avec état, il est essentiel que la sémantique de la fonction soit axée sur la session (find-record, update-record, delete-record) lorsque la nature « avec état » du service est clairement établie.

Il en résulte que si, comme dans cet exemple, les fonctions update et delete portent sur l’élément de données précédemment localisé, elles ne fournissent pas leurs propres clés d’élément de données ; en effet, celles-ci seraient redondantes et risqueraient de dérouter les développeurs. En revanche, un service sans état doit systématiquement indiquer toutes les données car la session ne fournit aucun contexte.

# Questions et problèmes récurrents

Les problèmes de syntaxe créés par les mises à jour ou les modifications apportées à l’API sont souvent ignorés. Chaque API présente deux faces, que le processus de changement peut désynchroniser.

Pour leur API, certains architectes prévoient une variable de version afin de s’assurer que les mêmes formats soient attendus sur les deux faces. Au minimum, les côtés serveur et client d’une API doivent procéder à une validation élémentaire pour se protéger des modifications susceptibles d’induire un conflit de syntaxe, et ce afin d’éviter qu’elles contaminent les informations ou bloquent les applications.

Une autre question récurrente concerne le format des données. Le langage XML est le plus répandu pour définir les paramètres et échanger des informations ; il s’applique aux interfaces REST et SOAP.

Mais le traitement XML est lourd et s’avère surtout utile pour exprimer les données sans structure. Pour l’architecture REST, JSON rencontre un succès grandissant, car il est plus facile à mettre en oeuvre et assure un typage spécifique des variables, largement utilisé et attendu dans la création d’API. Dans les cas où les API échangent des éléments de données strictement définis, il est sans doute préférable d’utiliser JSON pour les échanges RESTful.Les tests d’API sont souvent intégrés aux processus de gestion du cycle de vie des applications. C’est justifié pour une partie d’entre eux, mais des tests unitaires spécifiques doivent également être conçus afin de valider les API et de garantir leur exécution correcte même lorsque les données contiennent des erreurs.

Moins les liaisons de données et le typage d’une API sont contraignants, plus il est risqué de transmettre des informations qui entraîneront une erreur ou un blocage ultérieur. C’est pourquoi il est important d’adopter des contraintes strictes sur les variables et de tester chaque API avec un large éventail de données.

Les problèmes de constitution des API peuvent détruire une application plus vite et plus radicalement que tout autre type d’erreur d’architecture. Le temps supplémentaire passé à concevoir des API de façon à prévoir les conditions d’erreur présentes et futures sera du temps bien employé.
