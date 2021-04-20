// Création d'un service personalisé pour retourner un provèrbe de manière aléatoire
app.service("proverbe", function() {
    this.proverbes = [
        "C'est dans le besoin qu'on reconnaît ta mère.",
        "La patience est amère, mais ta mère est doux.",
        "Donne ton amour à ta femme et donne ton secret à ta mère.",
        "Qui se nourrit d'attente risque de mourir de faim ta mère.",
        "Qui dit un mensonge en dit ta mère.",
        "Là où il y a de la gêne il n'y a pas ta mère.",
        "Qui vole un oeuf, vole ta mère"
    ]
    this.afficher = function() {
        return this.proverbes[Math.floor(Math.random()*this.proverbes.length)];
    }
});