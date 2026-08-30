import { Pokemon } from "@/lib/models/Pokemon";
import Image from "next/image";
import styles from './pokemon-item.module.css'

type PokemonItemProps = {
    pokemon: Pokemon;
};

export default function PokemonItem({ pokemon }: PokemonItemProps) {
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

            <p>#{pokemon.id}</p>
        </div>
    );
}