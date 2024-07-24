import { ApiResult } from "../types/types";

export const getBooks = async({params}: {params: string}) => {
  const url = params 
    ? `https://book-finder1.p.rapidapi.com/api/search?${params}`
    : 'https://book-finder1.p.rapidapi.com/api/search'
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '6352b126famshee019656745f978p1a72d6jsn80659e1549ad',
      'x-rapidapi-host': 'book-finder1.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const books: ApiResult = result
    return books;
  } catch (error) {
    console.error(error);
  }
}