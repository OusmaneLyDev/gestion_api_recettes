import express from 'express';
import RecetteController from '../controllers/RecetteController.js';
import { addRequestValidator, deleteRequestValidator } from '../validators/RecetteValidator.js'
const router = express.Router();

router.get('/recettes', RecetteController.getAllRecettes);
router.get('/recettes/:id', RecetteController.getRecetteById);
router.put('/recettes/:id', RecetteController.updateRecette);
router.post('/recettes', addRequestValidator, RecetteController.createRecette);
router.delete('/recettes/:id',deleteRequestValidator, RecetteController.deleteRecette);

export default router;
