import { Category } from './types';

const baseURL = 'http://localhost:8000/api/';

export const getCategories = (): Promise<Category[]> => fetch(`${baseURL}categories`)
  .then((response) => response.json());

export const deleteCategory = async (id: number)
: Promise<void> => (await fetch(`${baseURL}categories/${id}`, { method: 'DELETE' })).json();

export const createCategory = async (item: Category): Promise<void> => {
  (
    await fetch(`${baseURL}categories/`, {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();
};

export const updateCategory = async (item: Category): Promise<void> => {
  (
    await fetch(`${baseURL}categories/`, {
      method: 'PATCH',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();
};
