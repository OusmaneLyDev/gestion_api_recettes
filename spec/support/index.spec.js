import sum from '../../models/sum.js';
import recette from '../../models/RecetteModel.js';
describe('Recettes tests', () => {
  let recetteId = null;

  it('Can be create', async () => {
    const recette = {
      titre: 'plat',
      ingredient: 'plates',
      type: 'plat',
    };
    const result = await recette.createRecette(
      recette.titre,
      recette.ingredient,
      recette.type,
    );
    recetteId = result.inserId;
    const createRecette = await recette.getRecetteById(recetteId);
    expect(recetteId).not.toBeNull();
    expect(createRecette).not.toBeNull();
  });
  it('Can not be create', async () => {
    try {
      const recette = {
        titre: '',
        ingredient: 'plates',
        type: 'plat',
      };
      const result = await recette.createRecette(
        recette.titre,
        recette.ingredient,
        recette.type,
      );
      recetteId = result.inserId;
      const createRecette = await recette.getRecetteById(recetteId);
      expect(recetteId).not.toBeNull();
      expect(createRecette).not.toBeNull();
    } catch (error) {}
  });
  it('Can get all recette', async () => {
    try {
      const getAll = await recette.getRecette();
      expect(getAll).not.toBeNull();
    } catch (error) {}
  });

  // it('should find false to be different from true', () => {
  //   expect(false).not.toBe(true);
  // });
  // it('adds 1 + 2 to equal 3', () => {
  //     const recette = {id: 1, title: 'test'}
  //     const result = {id: 1, title: 'test'}
  //     expect(recette).toEqual(result);
  //   });
});
