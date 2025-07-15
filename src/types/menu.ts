import type { CocktailCode } from '@/types/cocktails'

// Пункт меню для коктейля
export interface CocktailMenuItem {
  code: CocktailCode
  name: string
  url: string
  emoji: string
}

export const COCKTAIL_MENU_ITEMS: CocktailMenuItem[] = [
  {
    code: 'margarita',
    name: 'Margarita',
    url: '/cocktail/margarita',
    emoji: '🍹'
  },
  {
    code: 'mojito',
    name: 'Mojito',
    url: '/cocktail/mojito',
    emoji: '🍃'
  },
  {
    code: 'a1',
    name: 'A1',
    url: '/cocktail/a1',
    emoji: '🍸'
  },
  {
    code: 'kir',
    name: 'Kir',
    url: '/cocktail/kir',
    emoji: '🍷'
  }
]
