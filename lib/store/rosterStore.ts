import { create } from "zustand";
import { Pokemon } from "@/lib/models/Pokemon";

const MAX_ROSTER_SIZE = 6;

type RosterState = {
    roster: Array<Pokemon | null>;

    addPokemon: (pokemon: Pokemon) => void;
    removePokemon: (pokemonId: number) => void;
    clearRoster: () => void;
    isPokemonInRoster: (pokemonId: number) => boolean;
};

export const useRosterStore = create<RosterState>((set, get) => ({
    roster: Array(MAX_ROSTER_SIZE).fill(null),

    addPokemon: (pokemon) => {
        const { roster } = get();

        if (roster.some((item) => item?.id === pokemon.id)) {
            return;
        }

        const emptySlotIndex = roster.findIndex((item) => item === null);

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
            roster: Array(MAX_ROSTER_SIZE).fill(null),
        });
    },

    isPokemonInRoster: (pokemonId) => {
        return get().roster.some((pokemon) => pokemon?.id === pokemonId);
    },
}));