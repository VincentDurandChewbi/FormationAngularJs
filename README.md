Exercice avec AngularJS, Bootstrap 4.x, OpenWeatherMap, localStorage et leaflet

Une page d'acceuil:
- Affichage de la météo (ville + temps + icone + température) si ville enregistrée dans le localStorage. 
- Sinon redirection vers formulaire de config.

Une page météo:
- Affichage de la météo complète (+ prévisions pour les heures à venir) si ville enregistrée dans le localStorage. 
- Sinon redirection vers formulaire de config.

Une page prévisions à 5 jours:
- Affichage de la météo pour les 5 jours à venir si ville enregistrée dans le LocalStorage.
- Sinon redirection vers formulaire de config.

Une page de configuration:
- saisie d'une ville dans un formulaire.
- affichage d'une liste de villes retournées par l'API.
- au clic sur une ville, enregistrement dans le LocalStorage des infos nécessaires (ville, département, latitude et longitude,) et affichage de la météo sur la page d'accueil.

Une page carte 
- Affichage de la carte (OpenStreetMap) de la ville enregistrée dans le LocalStorage.
- Sinon redirection vers formulaire de config.

Une page crédits
- Technologies et API utilisées.

Une page Mentions Légales dans le footer à côté du copyright (Obligatoire).
[OPTIONS]
- dans la configuration, récupération de la ville par géolocalisation.
- dessiner sur la carte le contour de la ville.
- une page pour la qualité de l'air.

Les appels aux l'API openweathermap et geo, ainsi qu'à leaflet se feront dans un service (réutilisabilité)
- https://geo.api.gouv.fr/communes?nom=Canet&fields=departement,centre,contour
- https://geo.api.gouv.fr/communes?lat=43.5978&lon=3.4822
- https://api.openweathermap.org/data/2.5/onecall?lat=43.6167&lon=3.4333&appid={appid}
- pour les icones:  http://openweathermap.org/img/wn/{code}@2x.png
- http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=50&lon=50&appid={appid}
Le paramétrage des API se fera également dans le service.

Il est conseillé de commencer par la mise en place du template de page et la navigation (routage).

Pour les résultats des API, on peut afficher les tableaux sur la page, ainsi que les objets avec le filtre 'json' la console est votre amie ;-)

A cause des API, il faut mettre l'application complète sur un serveur Web
