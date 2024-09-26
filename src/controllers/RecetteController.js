import RecetteService from "../models/RecetteModel.js";
class RecetteController {
  static async getAllRecettes(req, res, next) {
    try {
      const recettes = await RecetteService.getAllRecettes();
      res.json(recettes);
    } catch (error) {
      next(error);
    }
  }

  static async getRecetteById(req, res, next) {
    const { id } = req.params;
    try {
      const recette = await RecetteService.getRecetteById(id);
      if (!recette) {
        return res.status(404).json({ message: "Recette non trouvée" });
      }
      res.json(recette);
    } catch (error) {
      next(error);
    }
  }

  static async createRecette(req, res, next) {
    console.log("bonjour");
    const { titre, ingredient, type, id_categorie } = req.body;
    try {
      const id = await RecetteService.createRecette(
        titre,
        ingredient,
        type,
        id_categorie,
      );
      res.status(201).json({ id, titre, ingredient, type, id_categorie });
    } catch (error) {
      next(error);
    }
  }

  static async updateRecette(req, res, next) {
    const { id } = req.params;
    const { titre, ingredient, type, id_categorie } = req.body;
    try {
      const affectedRows = await RecetteService.updateRecette(
        id,
        titre,
        ingredient,
        type,
        id_categorie,
      );
      if (affectedRows === 0) {
        return res.status(404).json({ message: "Recette non trouvée" });
      }
      res.json({ message: "Recette mise à jour avec succès" });
    } catch (error) {
      next(error);
    }
  }

  static async deleteRecette(req, res, next) {
    const { id } = req.params;
    try {
      const affectedRows = await RecetteService.deleteRecette(id);
      if (affectedRows === 0) {
        return res.status(404).json({ message: "Recette non trouvée" });
      }
      res.json({ message: "Recette supprimée avec succès" });
    } catch (error) {
      next(error);
    }
  }
  /*Pour les categories*/
  static async getAllCategories(req, res, next) {
    try {
      const recettes = await RecetteService.getAllCategories();
      res.json(recettes);
    } catch (error) {
      next(error);
    }
  }
  static async getCategorieById(req, res, next) {
    const { id } = req.params;
    try {
      const recette = await RecetteService.getCategorieById(id);
      if (!recette) {
        return res.status(404).json({ message: "Recette non trouvée" });
      }
      res.json(recette);
    } catch (error) {
      next(error);
    }
  }
  static async createCategorie(req, res, next) {
    console.log("bonjour");
    const { nom } = req.body;
    try {
      const id = await RecetteService.createCategorie(nom);
      res.status(201).json({ nom });
    } catch (error) {
      next(error);
    }
  }
  static async updateCategorie(req, res, next) {
    const { id } = req.params;
    const { nom } = req.body;
    try {
      const affectedRows = await RecetteService.updateCategorie(id, nom);
      if (affectedRows === 0) {
        return res.status(404).json({ message: "Recette non trouvée" });
      }
      res.json({ message: "Recette mise à jour avec succès" });
    } catch (error) {
      next(error);
    }
  }
  static async deleteCategorie(req, res, next) {
    const { id } = req.params;
    try {
      const affectedRows = await RecetteService.deleteCategorie(id);
      if (affectedRows === 0) {
        return res.status(404).json({ message: "Recette non trouvée" });
      }
      res.json({ message: "Recette supprimée avec succès" });
    } catch (error) {
      next(error);
    }
  }
}
export default RecetteController;
