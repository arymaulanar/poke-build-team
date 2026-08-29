import { PokemonSpritesResponse } from "./PokemonSpritesResponse";
import { PokemonTypeResponse } from "./PokemonTypeResponse";

export interface PokemonResponse {
    id: number;
    name: string;
    base_experience: string;
    sprites: PokemonSpritesResponse;
    types: PokemonTypeResponse[];
}