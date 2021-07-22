import { Category, Word } from './types';

const baseURL = 'https://arcane-wildwood-23023.herokuapp.com/api/';

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

export const getWordsByCategory = (categoryId: number): Promise<Word[]> => fetch(`${baseURL}words/${categoryId}`)
  .then((response) => response.json());

export const deleteWord = async (wordId: string)
: Promise<void> => (await fetch(`${baseURL}words/${wordId}`, { method: 'DELETE' })).json();

export const createWord = async (item: Word): Promise<void> => {
  (
    await fetch(`${baseURL}words/`, {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();
};

export const updateWord = async (item: Word): Promise<void> => {
  (
    await fetch(`${baseURL}words/`, {
      method: 'PATCH',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();
};
