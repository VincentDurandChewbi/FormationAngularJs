// Controleur de la page p3
// $location est en lien avec le système de routage (redirection par ex)
app.controller("p3Ctrl", function($scope, $routeParams) {
    $scope.prenom = $routeParams.prenom;
    console.log($routeParams);
});