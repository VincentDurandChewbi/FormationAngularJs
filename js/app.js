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
    .otherwise({
        redirectTo: "/"
    });

})