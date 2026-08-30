import { mapPokemon } from "../mapper/PokemonMapper";
import { Pokemon } from "../models/Pokemon";
import { DEFAULT_PAGE_LIMIT } from "../utils/constants";
import { fetchPokemonDetail } from "./api/fetchPokemonDetail";
import { fetchPokemonList } from "./api/fetchPokemonList";

export async function getPokemonPage(
    offset = 0,
    limit = DEFAULT_PAGE_LIMIT,
): Promise<Pokemon[]> {
    const list = await fetchPokemonList(offset, limit);
    const details = await Promise.all(
        list.results.map((pokemon) =>
            fetchPokemonDetail(pokemon.url)
        )
    );

    return details.map(mapPokemon)
}
