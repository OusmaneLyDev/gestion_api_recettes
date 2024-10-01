import express from 'express';
import RecetteController from '../controllers/RecetteController.js';
import {
  addRequestValidator,
  deleteRequestValidator,
} from '../validators/RecetteValidator.js';

const router = express.Router();

// Routes pour les recettes
router.get('/recettes', RecetteController.getAllRecettes);
router.get('/recettes/:id', RecetteController.getRecetteById);
router.put('/recettes/:id', addRequestValidator, RecetteController.updateRecette);  // Utilisation du validateur pour PUT
router.post('/recettes', addRequestValidator, RecetteController.createRecette);     // Utilisation du validateur pour POST
router.delete('/recettes/:id', deleteRequestValidator, RecetteController.deleteRecette);



export default router;
