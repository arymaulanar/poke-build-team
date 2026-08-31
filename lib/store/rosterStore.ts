import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Pokemon } from "@/lib/models/Pokemon";
import { MAX_ROSTER_SIZE } from "@/lib/utils/constants";

type RosterState = {
    roster: Array<Pokemon | null>;

    addPokemon: (pokemon: Pokemon) => void;
    removePokemon: (pokemonId: number) => void;
    clearRoster: () => void;
    isPokemonInRoster: (pokemonId: number) => boolean;
};

const createEmptyRoster = (): Array<Pokemon | null> =>
    Array(MAX_ROSTER_SIZE).fill(null);

export const useRosterStore = create<RosterState>()(
    persist(
        (set, get) => ({
            roster: createEmptyRoster(),

            addPokemon: (pokemon) => {
                const { roster } = get();

                const alreadyExists = roster.some(
                    (item) => item?.id === pokemon.id
                );

                if (alreadyExists) {
                    return;
                }

                const emptySlotIndex = roster.findIndex(
                    (item) => item === null
                );

                if (emptySlotIndex === -1) {
                    return;
                }

                const nextRoster = [...roster];
                nextRoster[emptySlotIndex] = pokemon;

                set({
                    roster: nextRoster,
                });
            },

            removePokemon: (pokemonId) => {
                set((state) => ({
                    roster: state.roster.map((pokemon) =>
                        pokemon?.id === pokemonId ? null : pokemon
                    ),
                }));
            },

            clearRoster: () => {
                set({
                    roster: createEmptyRoster(),
                });
            },

            isPokemonInRoster: (pokemonId) => {
                return get().roster.some(
                    (pokemon) => pokemon?.id === pokemonId
                );
            },
        }),
        {
            name: "pokemon-team-roster",
        }
    )
);