// Module principal + table de routage
var app = angular.module('app', ["ngRoute"]);

//configuration des routes
app.config(function($routeProvider){
    // si / dans l'url, appel de home.html et controleur homeCtrl
    $routeProvider
    .when("/",{
        templateUrl: "../templates/home.html",
        controller: "homeCtrl"
    })
    .when("/p1",{
        templateUrl: "../templates/p1.html",
        controller: "p1Ctrl"
    })
    .when("/p2",{
        templateUrl: "../templates/p2.html",
        controller: "p2Ctrl"
    })
    .when("/p3/:prenom",{
        templateUrl: "../templates/p3.html",
        controller: "p3Ctrl"
    })
    .when("/p4/:categorie/:scat/:prod",{
        templateUrl: "../templates/p4.html",
        controller: "p4Ctrl"
    })
    // Page d'accueil de la boutique, affichagfe des catégories
    .when("/boutique",{
        templateUrl: "../templates/boutique.html",
        controller: "boutiqueCtrl"
    })
    // affichage des produits de la catégorie choisie
    .when("/boutique/:cat",{
        templateUrl: "../templates/categorie.html",
        controller: "categorieCtrl"
    })
    // affichage du produit choisi
    .when("/boutique/:cat/:produit",{
        templateUrl: "../templates/produit.html",
        controller: "produitCtrl"
    })
    .otherwise({
        redirectTo: "/"
    });

})