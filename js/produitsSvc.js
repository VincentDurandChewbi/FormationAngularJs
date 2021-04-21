// Création d'un service personalisé pour retourner un provèrbe de manière aléatoire
app.service("produits", function() {
    this.produits = [
        {id: 1, nom: 'pomme', prix: 1.20, cat: 'fruits', decription: 'Miam'},
        {id: 2, nom: 'poires', prix: 1.21, cat: 'fruits', decription: 'Miam Miam'},
        {id: 3, nom: 'bananes', prix: 1.12, cat: 'fruits', decription: 'Miam Miam Miam'},
        {id: 4, nom: 'laitues', prix: 0.99, cat: 'légumes', decription: 'Miam Miam Miam Miam'},
        {id: 5, nom: 'poireaux', prix: .70, cat: 'légumes', decription: 'Miam Miam Miam Miam Miam'},
        {id: 6, nom: 'mangues', prix: 2.50, cat: 'fruits', decription: 'Miam Miam Miam Miam Miam Miam'},
    ]

    this.categorie = [
        "fruits",
        "légumes"
    ]

    this.listerLesCategories = function() {
        return this.categorie;
    }

    this.listerLesProduitsDUneCatégories = function(cat) {
        let res = [];
        this.produits.forEach(function(elem){
            if (elem.cat == cat) {
                res.push({nom: elem.nom, id: elem.id});
            }
        })

        // Sans forEach
        // for (produit of this.produits) {
        //     if (produit.cat == cat) {
        //         res.push({nom: produit.nom, id: produit.id});
        //     }
        // }
        return res;
    }

    this.getProduct = function(id) {
        for (produit of this.produits) {
            if (produit.id == id) {
               return produit;
            }
        }
    }
});

