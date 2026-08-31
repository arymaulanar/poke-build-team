export const BASE_URL = "https://pokeapi.co/api/v2/"
export const DEFAULT_PAGE_LIMIT = 10
export const MAX_ROSTER_SIZE = 6

export const POKEMON_TYPE_BG_COLORS: Record<string, string> = {
    normal: '#A8A878',
    fighting: '#C03028',
    flying: '#A890F0',
    poison: '#A040A0',
    ground: '#E0C068',
    rock: '#B8A038',
    bug: '#A8B820',
    ghost: '#705898',
    steel: '#B8B8D0',
    fire: '#F08030',
    water: '#6890F0',
    grass: '#78C850',
    electric: '#F8D030',
    psychic: '#F85888',
    ice: '#98D8D8',
    dragon: '#7038F8',
    dark: '#705848',
    fairy: '#EE99AC',
};

export const DEFAULT_POKEMON_TYPE_BG_COLORS = '#68A090';
export const POKEMON_TYPE_TEXT_COLORS: Record<string, 'light' | 'dark'> = {
    normal: 'dark',
    fighting: 'light',
    flying: 'dark',
    poison: 'light',
    ground: 'dark',
    rock: 'dark',
    bug: 'dark',
    ghost: 'light',
    steel: 'dark',
    fire: 'light',
    water: 'light',
    grass: 'dark',
    electric: 'dark',
    psychic: 'light',
    ice: 'dark',
    dragon: 'light',
    dark: 'light',
    fairy: 'dark',
};
