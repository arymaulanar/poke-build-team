import { mapPokemon } from "../mapper/PokemonMapper";
import { Pokemon } from "../models/Pokemon";
import { PokemonResponse } from "../models/response/PokemonResponse";
import { fetchHandler } from "./api/PokeApi";

export async function fetchPokemonDetail(url: string): Promise<Pokemon> {
    const response = await fetchHandler<PokemonResponse>(url);
    return mapPokemon(response)
}
