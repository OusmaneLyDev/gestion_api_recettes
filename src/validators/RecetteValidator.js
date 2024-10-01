import { check, param, validationResult } from 'express-validator';
import { StatusCodes } from 'http-status-codes';
import RecetteService from '../models/RecetteModel.js';

const addRequestValidator = [
  check('titre')
    .not()
    .isEmpty()
    .withMessage('Titre ne peut pas être vide!')
    .bail()
    .isLength({ min: 5, max: 100 })
    .withMessage('Le titre doit comporter entre 5 et 100 caractères!')
    .bail()
    .custom(async (value, { req }) => {
      const result = await RecetteService.checkRecipe(value);
      if (result !== 0) {
        throw new Error('Cette recette existe déjà!');
      }
      return true;
    }),

      // Validation du champ 'ingredients'
  check('ingredient')
  .not()
  .isEmpty()
  .withMessage('Les ingrédients ne peuvent pas être vides!')
  .bail()
  .isLength({ min: 10, max: 500 })
  .withMessage('Les ingrédients doivent comporter entre 10 et 500 caractères!'),

// Validation du champ 'type'
check('type')
  .not()
  .isEmpty()
  .withMessage('Le type de recette est obligatoire!')
  .bail()
  .isIn(['entrée', 'plat', 'dessert'])
  .withMessage("Le type de recette doit être l'une des valeurs suivantes : entrée, plat, dessert."),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ errors: errors.array() });
    next();
  },
];

const deleteRequestValidator = [
  param('id')
    .not()
    .isEmpty()
    .withMessage('Id est obligatoire!')
    .bail()
    .custom(async (value, { req }) => {
      const result = await RecetteService.getRecetteById(value);
      if (result === 0) {
        throw new Error("Cette recette n'existe pas!");
      }
      return true;
    }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ errors: errors.array() });
    next();
  },
];

export { addRequestValidator, deleteRequestValidator };
