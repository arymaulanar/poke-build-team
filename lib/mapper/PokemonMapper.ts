import { Pokemon } from "../models/Pokemon";
import { PokemonResponse } from "../models/response/PokemonResponse";

export function mapPokemon(response: PokemonResponse): Pokemon {
    return {
        id: response.id,
        name: response.name,
        baseExperience: response.base_experience,
        sprite: response.sprites.front_default,
        types: response.types.map(({ type }) => type.name),
    }
}