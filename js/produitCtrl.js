app.controller("produitCtrl", function($scope, $location, produits, $routeParams) {
    $scope.produitId = $routeParams.produit;
    $scope.produit = produits.getProduct($scope.produitId);
    console.log($scope.produitId);
    console.log($scope.produit);
});