// ingredientService.ts
import api, { Ingredient } from './api';

export const ingredientService = {
  getAll: async (): Promise<Ingredient[]> => {
    const res = await api.get('/ingredients'); // <- make sure this matches your backend route
    console.log('GET /ingredients', res.data); // add this to debug
    return res.data;
  },

  findById: async (id: number): Promise<Ingredient> => {
    const res = await api.get(`/ingredients/find/${id}`);
    return res.data;
  },

  save: async (ingredient: Ingredient): Promise<Ingredient> => {
    const res = await api.post('/ingredients/save', ingredient);
    return res.data;
  },

  update: async (ingredient: Ingredient): Promise<Ingredient> => {
    const res = await api.post('/ingredients/update', ingredient); // backend expects full object
    return res.data;
  },

  delete: async (id: number): Promise<string> => {
    const res = await api.delete(`/ingredients/delete/${id}`);
    return res.data;
  },
};
