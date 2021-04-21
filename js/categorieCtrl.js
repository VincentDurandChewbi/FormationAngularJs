// Controleur de la page de la boutique
// $location est en lien avec le système de routage (redirection par ex)
app.controller("categorieCtrl", function($scope, $location, produits, $routeParams) {
    $scope.categorie = $routeParams.cat;
    $scope.produits = produits.listerLesProduitsDUneCatégories($scope.categorie);
    console.log($scope.categorie);
    console.log($scope.produits);
    $scope.toProduit = function(produit) {
                //redirection vers p3
                $location.path("/boutique/"+$scope.categorie+"/"+produit.id)
    }
});

