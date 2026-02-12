import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  weight: number;
  unit: string;
  category: {
    id: number;
    name: string;
  };
  image: string | null;
}

export interface Ingredient {
  id: number;
  name: string;
  quantity: number;
  min_quantity: number;
  unit: string;
}

export interface CartItem {
  id: number;
  product: Product;
  quantity: number;
}

export interface ShoppingCart {
  id: number;
  cartItems: CartItem[];
}

export interface Order {
  id: number;
  totalPrice: number;
  dateTime: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
  shoppingCart: ShoppingCart;
}

export interface Category {
  id: number;
  name: string;
}

export interface Account {
  id: number;
  amount: number;
  user: {
    id: number;
    username: string;
    email: string;
  };
}

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const productService = {
  getAll: () => api.get<Product[]>('/products').then(res => res.data),

  getById: (id: number) => api.get<Product>(`/products/${id}`).then(res => res.data),

  save: (payload: any) =>
    api.post<Product>('/products/save', payload).then(res => res.data),

  update: (payload: any) =>
    api.post<Product>('/products/update', payload).then(res => res.data),

  delete: (id: number) =>
    api.delete(`/products/delete/${id}`).then(res => res.data),
};

export const ingredientService = {
  
  getAll: () => api.get<Ingredient[]>("/ingredients").then(res => res.data),

  
  update: (ingredient: Ingredient) => 
    api.post("/ingredients/update", ingredient).then(res => res.data),

  
  save: (ingredient: Omit<Ingredient, "id">) => 
    api.post("/ingredients/save", ingredient).then(res => res.data),

  
  delete: (id: number) => 
    api.delete(`/ingredients/delete/${id}`).then(res => res.data),
};

export const orderService = {
  getAll: () => api.get<Order[]>('/orders').then(res => res.data),
  create: (data: any) => api.post('/orders', data).then(res => res.data),
  getById: (id: number) => api.get<Order>(`/orders/${id}`).then(res => res.data),
};

export const cartService = {
  getCart: (cartId: number) => 
    api.get<ShoppingCart>(`/shoppingCarts/${cartId}`).then(res => res.data),
  addItem: (cartId: number, productId: number, quantity: number) =>
    api.post(`/shoppingCarts/${cartId}/items`, { productId, quantity }).then(res => res.data),
  removeItem: (cartId: number, itemId: number) =>
    api.delete(`/shoppingCarts/${cartId}/items/${itemId}`).then(res => res.data),
  updateItem: (cartId: number, itemId: number, quantity: number) =>
    api.put(`/shoppingCarts/${cartId}/items/${itemId}`, { quantity }).then(res => res.data),
  clearCart: (cartId: number) =>
    api.delete(`/shoppingCarts/${cartId}/items`).then(res => res.data),
};

export const categoryService = {
  getAll: () => api.get<Category[]>('/categories').then(res => res.data),
};

export const accountService = {
  getAll: () => api.get<Account[]>('/accounts').then(res => res.data),
  getById: (id: number) => api.get<Account>(`/accounts/${id}`).then(res => res.data),
};

export default api;