import express from 'express';
import RecetteController from '../controllers/RecetteController.js';
const router = express.Router();

router.get('/recettes', RecetteController.getAllRecettes);
router.get('/recettes/:id', RecetteController.getRecetteById);
router.put('/recettes/:id', RecetteController.updateRecette);
router.post('/recettes',  RecetteController.createRecette);
router.delete('/recettes/:id', RecetteController.deleteRecette);

export default router ;
