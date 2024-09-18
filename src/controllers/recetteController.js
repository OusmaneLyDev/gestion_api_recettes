// const RecetteModel = require('../models/recetteModel');
const {
  getAllRecettes,
  getRecetteById,
  createRecette,
  updateRecette,
  deleteRecette,
} =  require('../models/recetteModel');

class RecetteController {
  static async getAllRecettes(req, res) {
    try {
      const recettes = await getAllRecettes();
      res.json(recettes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getRecetteById(req, res) {
    const { id } = req.params;
    try {
      const recette = await getRecetteById(id);
      if (!recette) {
        return res.status(404).json({ message: 'Recette non trouvée' });
      }
      res.json(recette);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createRecette(req, res) {
    const { titre, ingredient, type } = req.body;
    try {
      const id = await createRecette(titre, ingredient, type);
      res.status(201).json({ id, titre, ingredient, type });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateRecette(req, res) {
    const { id } = req.params;
    const { titre, ingredient, type } = req.body;
    try {
      const affectedRows = await updateRecette(id, titre, ingredient, type);
      if (affectedRows === 0) {
        return res.status(404).json({ message: 'Recette non trouvée' });
      }
      res.json({ message: 'Recette mise à jour avec succès' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteRecette(req, res) {
    const { id } = req.params;
    try {
      const affectedRows = await deleteRecette(id);
      if (affectedRows === 0) {
        return res.status(404).json({ message: 'Recette non trouvée' });
      }
      res.json({ message: 'Recette supprimée avec succès' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = RecetteController;
