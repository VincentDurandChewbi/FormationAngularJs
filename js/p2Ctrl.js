// Controleur de la page d'accueil
// $location est en lien avec le système de routage (redirection par ex)
app.controller("p2Ctrl", function($scope, $location) {
    $scope.prenoms = [
        "Vincent",
        "Kevin",
        "Olivier"
    ]
    $scope.versP3 = function(prenom) {
        //redirection vers p3
        $location.path("/p3/"+prenom)
    }

});