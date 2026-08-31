import { DEFAULT_POKEMON_TYPE_BG_COLORS, POKEMON_TYPE_BG_COLORS, POKEMON_TYPE_TEXT_COLORS } from "./constants";

export function getBackgroundTypeColor(typeName: string): string {
    return POKEMON_TYPE_BG_COLORS[typeName.toLowerCase()] ?? DEFAULT_POKEMON_TYPE_BG_COLORS;
}

export function getContrastTextColor(typeName: string): '#000000' | '#FFFFFF' {
    return POKEMON_TYPE_TEXT_COLORS[typeName.toLowerCase()] === 'light' ? '#FFFFFF' : '#000000';
}

export function capitalize(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}