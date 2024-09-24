import db from '../config/database.js';

class RecetteService {
  static async getAllRecettes() {
    try {
      const [rows] = await db.query('SELECT * FROM recettes');
      return rows;
    } catch (error) {
      console.error('Error fetching all recipes:', error.message);
      throw error;
    }
  }
  static async getRecetteById(id) {
    try {
      const [rows] = await db.query('SELECT * FROM recettes WHERE id = ?', [
        id,
      ]);
      return rows.length > 0 ? rows[0] : null;
    } catch (error) {
      console.error('Error fetching recipe by ID:', error.message);
      throw error;
    }
  }
  static async createRecette(titre, ingredient, type) {
    try {
      const [result] = await db.query(
        'INSERT INTO recettes (titre, ingredient, type) VALUES (?, ?, ?)',
        [titre, ingredient, type],
      );
      return result.insertId;
    } catch (error) {
      console.error('Error creating recipe:', error.message);
      throw error;
    }
  }
  static async updateRecette(id, titre, ingredient, type) {
    try {
      const [result] = await db.query(
        'UPDATE recettes SET titre = ?, ingredient = ?, type = ? WHERE id = ?',
        [titre, ingredient, type, id],
      );
      return result.affectedRows;
    } catch (error) {
      console.error('Error updating recipe:', error.message);
      throw error;
    }
  }
  static async deleteRecette(id) {
    try {
      const [result] = await db.query('DELETE FROM recettes WHERE id = ?', [
        id,
      ]);
      return result.affectedRows;
    } catch (error) {
      console.error('Error deleting recipe:', error.message);
      throw error;
    }
  }
}

export default RecetteService;
