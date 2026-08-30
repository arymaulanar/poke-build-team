import { PokemonNamedResponse } from "./PokemonNamedResponse";

export interface PokemonListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results : PokemonNamedResponse[];
}