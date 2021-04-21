// Controleur de la page de la boutique
// $location est en lien avec le système de routage (redirection par ex)
app.controller("boutiqueCtrl", function($scope, $location, produits) {
    $scope.categories = produits.listerLesCategories();
    $scope.toCategorie = function(categorie) {
                //redirection vers p3
                $location.path("/boutique/"+categorie)
    }
});