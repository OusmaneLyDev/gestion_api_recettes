const db = require('../config/database');

// Récupérer toutes les recettes
const getAllRecettes = async () => {
  const [rows] = await db.query('SELECT * FROM recettes'); // Utilise destructuration pour obtenir les lignes de résultat
  return rows; // Retourne les lignes de résultat
};

// Récupérer une recette par son ID
const getRecetteById = async (id) => {
  const [rows] = await db.query('SELECT * FROM recettes WHERE id = ?', [id]);
  return rows.length > 0 ? rows[0] : null; // Retourne la recette ou null si non trouvée
};

// Créer une nouvelle recette
const createRecette = async (titre, ingredient, type) => {
  const [result] = await db.query('INSERT INTO recettes (titre, ingredient, type) VALUES (?, ?, ?)', [titre, ingredient, type]);
  return result.insertId; // Retourne l'ID de la recette créée
};

// Mettre à jour une recette
const updateRecette = async (id, titre, ingredient, type) => {
  const [result] = await db.query('UPDATE recettes SET titre = ?, ingredient = ?, type = ? WHERE id = ?', [titre, ingredient, type, id]);
  return result.affectedRows; // Retourne le nombre de lignes affectées
};

// Supprimer une recette
const deleteRecette = async (id) => {
  const [result] = await db.query('DELETE FROM recettes WHERE id = ?', [id]);
  return result.affectedRows; // Retourne le nombre de lignes affectées
};

module.exports = {
  getAllRecettes,
  getRecetteById,
  createRecette,
  updateRecette,
  deleteRecette,
};
