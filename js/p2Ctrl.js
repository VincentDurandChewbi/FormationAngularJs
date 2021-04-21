// Controleur de la page d'accueil
// $location est en lien avec le système de routage (redirection par ex)
app.controller("p2Ctrl", function($scope, $location) {
    $scope.msg = "Le routage fonctionne ici aussi"
    $scope.msg2 = $location;
    $scope.suite = function() {
        //redirection vers p1
        $location.path("/p1")
    }
    
});