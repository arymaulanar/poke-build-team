import { PokemonListResponse } from "../models/response/PokemonListResponse";
import { BASE_URL, DEFAULT_PAGE_LIMIT } from "../utils/constants";
import { fetchHandler } from "./api/PokeApi";

export async function fetchPokemonList(currentPage: number = 0, pageLimit: number = DEFAULT_PAGE_LIMIT,): Promise<PokemonListResponse> {
    const params = new URLSearchParams();
    params.set("offset", String(currentPage));
    params.set("limit", String(pageLimit));
    const urlPath = `${BASE_URL}/pokemon?${params.toString()}`;
    return await fetchHandler<PokemonListResponse>(urlPath);
}
