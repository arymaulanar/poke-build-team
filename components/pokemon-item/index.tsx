import { Pokemon } from "@/lib/models/Pokemon";
import Image from "next/image";
import styles from './pokemon-item.module.css'
import { Pill } from "../pill";
import React from "react";
import { getBackgroundTypeColor, getContrastTextColor } from "@/lib/utils/helper";

interface PokemonItemProps {
    pokemon: Pokemon;
};

export const PokemonItem: React.FC<PokemonItemProps> = ({ pokemon }: PokemonItemProps) => {
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
                {pokemon.types.map(type => <Pill key={type + pokemon.id} text={type} textColorHex={getContrastTextColor(type)} backgroundHex={getBackgroundTypeColor(type)} />)}
            </div>

            <button className={styles.button} disabled>
                {`Add to team`}
            </button>
        </div>
    );
}