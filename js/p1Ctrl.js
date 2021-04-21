// Controleur de la page p1
// $location est en lien avec le système de routage (redirection par ex)
app.controller("p1Ctrl", function($scope, $location) {
    $scope.msg = "Le routage fonctionne ici aussi"
    $scope.msg2 = $location;
});