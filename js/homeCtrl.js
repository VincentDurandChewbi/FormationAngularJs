// Controleur de la page d'accueil
// $location est en lien avec le système de routage (redirection par ex)
app.controller("homeCtrl", function($scope, $location) {
    $scope.msg = "Le routage fonctionne..."
    $scope.suite = function() {
        //redirection vers p1
        $location.path("/p1")
    }
});