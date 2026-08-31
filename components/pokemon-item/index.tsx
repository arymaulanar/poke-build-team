"use client";

import { Pokemon } from "@/lib/models/Pokemon";
import { useRosterStore } from "@/lib/store/rosterStore";
import {
    getBackgroundTypeColor,
    getContrastTextColor,
} from "@/lib/utils/helper";
import Image from "next/image";
import React from "react";
import { Pill } from "../pill";
import styles from "./pokemon-item.module.css";

interface PokemonItemProps {
    pokemon: Pokemon;
}

export const PokemonItem: React.FC<PokemonItemProps> = ({ pokemon }) => {
    const roster = useRosterStore((state) => state.roster);
    const addPokemon = useRosterStore((state) => state.addPokemon);

    const isInRoster = roster.some(
        (item) => item?.id === pokemon.id
    );

    const isRosterFull = roster.every(
        (item) => item !== null
    );

    const isDisabled = isInRoster || isRosterFull;

    return (
        <div className={styles.container}>
            {pokemon.sprite && (
                <Image
                    src={pokemon.sprite}
                    alt={pokemon.name}
                    width={120}
                    height={120}
                    priority
                />
            )}

            <h2 className={styles.name}>
                {pokemon.name}
            </h2>

            <div className={styles.badgeContainer}>
                {pokemon.types.map((type) => (
                    <Pill
                        key={type + pokemon.id}
                        text={type}
                        textColorHex={getContrastTextColor(type)}
                        backgroundHex={getBackgroundTypeColor(type)}
                    />
                ))}
            </div>

            <button
                type="button"
                className={styles.button}
                disabled={isDisabled}
                onClick={() => addPokemon(pokemon)}
            >
                {isInRoster ? "Added to team" : "Add to team"}
            </button>
        </div>
    );
};