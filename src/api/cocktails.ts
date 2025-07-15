import type { CocktailApiResponse } from '@/types/cocktails'

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1'

const fetchFromAPI = async (endpoint: string): Promise<CocktailApiResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

export const cocktailsAPI = {
  searchByName: (name: string): Promise<CocktailApiResponse> => {
    return fetchFromAPI(`search.php?s=${encodeURIComponent(name)}`)
  }
}
