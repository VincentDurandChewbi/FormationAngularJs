// Controleur de la page p3
// $location est en lien avec le système de routage (redirection par ex)
app.controller("p4Ctrl", function($scope, $routeParams) {
    $scope.categorie = $routeParams.categorie;
    $scope.sousCategorie = $routeParams.scat;
    $scope.produit = $routeParams.prod;
    console.log($routeParams);
});