import axiosClient from './axios-client';

export const categoriesApi = {
  getCategories: () => axiosClient.get(`/categories`),
};
