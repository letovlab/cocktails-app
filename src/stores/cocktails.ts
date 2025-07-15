import { defineStore } from 'pinia'
import type { Cocktail, DrinkApiResponse } from '@/types/cocktails'
import { cocktailsAPI } from '@/api/cocktails'

export const useCocktailsStore = defineStore('cocktails', {
  state: () => ({
    cocktails: [] as Cocktail[],
    loading: false,
    error: null as string | null
  }),

  actions: {
    setCocktails(cocktails: Cocktail[]) {
      this.cocktails = cocktails
    },

    clearCocktails() {
      this.cocktails = []
    },

    // Поиск коктейлей по названию
    async searchCocktailsByName(name: string) {
      this.loading = true
      this.error = null

      try {
        const result = await cocktailsAPI.searchByName(name)

        if (result.drinks) {
          const cocktails: Cocktail[] = result.drinks.map(
            (drink: DrinkApiResponse) => ({
              id: drink.idDrink,
              strDrink: drink.strDrink,
              strCategory: drink.strCategory,
              strAlcoholic: drink.strAlcoholic,
              strGlass: drink.strGlass,
              strInstructions: drink.strInstructions,
              strDrinkThumb: drink.strDrinkThumb,
              description: drink.strInstructions,
              ingredients: this.extractIngredients(drink)
            })
          )

          this.setCocktails(cocktails)
        } else {
          this.setCocktails([])
          this.error = 'Коктейли не найдены'
        }
      } catch (error) {
        this.error = 'Ошибка при поиске коктейлей'
        this.setCocktails([])
        console.error('Error searching cocktails:', error)
      } finally {
        this.loading = false
      }
    },

    extractIngredients(drink: DrinkApiResponse) {
      const ingredients = []

      for (let i = 1; i <= 15; i++) {
        const ingredient = drink[
          `strIngredient${i}` as keyof DrinkApiResponse
        ] as string | undefined
        const measure = drink[`strMeasure${i}` as keyof DrinkApiResponse] as
          | string
          | undefined

        if (ingredient && ingredient.trim()) {
          ingredients.push({
            ingredient: ingredient.trim(),
            measure: measure?.trim() || undefined
          })
        }
      }

      return ingredients
    }
  }
})
