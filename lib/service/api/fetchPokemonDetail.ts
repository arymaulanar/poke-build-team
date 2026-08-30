import { PokemonResponse } from "../../models/response/PokemonResponse";
import { fetchHandler } from "./PokeApi";

export async function fetchPokemonDetail(url: string): Promise<PokemonResponse> {
    return await fetchHandler<PokemonResponse>(url);
}
