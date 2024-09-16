// Importation des modèles Book (Livre) et Author (Auteur) depuis le dossier des modèles
const { Book, Author } = require('../models');

// Fonction pour créer un nouveau livre
// Cette fonction est une méthode asynchrone qui attend une requête (req) et renvoie une réponse (res).
// Elle tente de créer un nouveau livre dans la base de données en utilisant les données contenues dans req.body.
// Si l'opération est réussie, elle renvoie une réponse JSON contenant le nouveau livre avec un statut HTTP 201 (Created).
// En cas d'erreur, elle passe l'erreur à la fonction de gestion d'erreurs suivante avec next(error).
exports.createBook = async (req, res, next) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (error) {
        next(error);
    }
}

// Fonction pour récupérer tous les livres avec leurs auteurs associés
// Cette méthode asynchrone récupère tous les livres de la base de données (équivalent de SELECT * FROM Books).
// Elle utilise 'include' pour effectuer une jointure avec le modèle Author afin d'obtenir également les informations sur l'auteur.
// Si l'opération réussit, elle renvoie une réponse JSON contenant tous les livres avec leurs auteurs, avec un statut HTTP 200 (OK).
// En cas d'erreur, l'erreur est transmise à la fonction suivante avec next(error).
exports.getAllBooks = async (req, res, next) => {
    try {
        const books = await Book.findAll({ include: Author });
        res.status(200).json(books);
    } catch (error) {
        next(error);
    }
}

// Fonction pour récupérer un seul livre par son ID avec les informations de l'auteur
// Cette méthode asynchrone récupère un livre spécifique depuis la base de données en fonction de son identifiant (req.params.id).
// Elle inclut également les informations sur l'auteur en utilisant 'include: Author'.
// Si l'opération réussit, elle renvoie un livre unique et ses informations d'auteur avec un statut HTTP 200 (OK).
// En cas d'erreur, l'erreur est transmise à la fonction suivante avec next(error).
exports.getOneBook = async (req, res, next) => {
    try {
        const book = await Book.findByPk(req.params.id, { include: Author });
        res.status(200).json(book);
    } catch (error) {
        next(error);
    }
}

// Fonction pour mettre à jour un livre par son ID
// Cette méthode asynchrone attend une requête (req) contenant les nouvelles données du livre et son ID (dans req.params.id).
// Elle met à jour le livre dans la base de données en utilisant la méthode update() et en spécifiant une condition 'where' pour l'ID.
// Si l'opération réussit, elle renvoie une réponse avec un statut HTTP 204 (No Content), signifiant que l'opération s'est bien déroulée sans contenu supplémentaire à renvoyer.
// En cas d'erreur, elle passe l'erreur à la fonction suivante avec next(error).
exports.updateBook = async (req, res, next) => {
    try {
        await Book.update(req.body, { where: { id: req.params.id } });
        res.status(204).end();
    } catch (error) {
        next(error);
    }
}

// Fonction pour supprimer un livre par son ID
// Cette méthode asynchrone attend une requête (req) avec l'ID du livre à supprimer (dans req.params.id).
// Elle utilise la méthode destroy() pour supprimer le livre de la base de données.
// Si l'opération réussit, elle renvoie une réponse avec un statut HTTP 204 (No Content), indiquant que la suppression s'est bien effectuée sans contenu à renvoyer.
// En cas d'erreur, elle transmet l'erreur à la fonction suivante avec next(error).
exports.deleteBook = async (req, res, next) => {
    try {
        await Book.destroy({ where: { id: req.params.id } });
        res.status(204).end();
    } catch (error) {
        next(error);
    }
}
