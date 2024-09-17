const db = require('../config/database');

const getAllRecettes = () => {
  return db.query('SELECT * FROM recettes');
};

const getRecetteById = (id) => {
  return db.query('SELECT * FROM recettes WHERE id = ?', [id]);
};

const createRecette = (titre, ingredient, type) => {
  return db.query('INSERT INTO recettes (titre, ingredient, type) VALUES (?, ?, ?)', [titre, ingredient, type]);
};

const updateRecette = (id, titre, ingredient, type) => {
  return db.query('UPDATE recettes SET titre = ?, ingredient = ?, type = ? WHERE id = ?', [titre, ingredient, type, id]);
};

const deleteRecette = (id) => {
  return db.query('DELETE FROM recettes WHERE id = ?', [id]);
};

module.exports = {
  getAllRecettes,
  getRecetteById,
  createRecette,
  updateRecette,
  deleteRecette,
};
