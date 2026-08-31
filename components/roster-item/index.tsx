import { Pokemon } from "@/lib/models/Pokemon";
import { capitalize } from "@/lib/utils/helper";
import Image from "next/image";
import styles from "./roster-item.module.css";

type RosterItemProps = {
    pokemon?: Pokemon;
};

export default function RosterItem({ pokemon }: RosterItemProps) {
    if (!pokemon) {
        return (
            <div className={styles.empty}>
                <span>Empty Slot</span>
            </div>
        );
    }

    return (
        <div className={styles.item}>
            <div className={styles.imageWrapper}>
                {pokemon.sprite && (
                    <Image
                        src={pokemon.sprite}
                        alt={pokemon.name}
                        width={32}
                        height={32}
                    />
                )}
            </div>

            <div className={styles.info}>
                <span className={styles.name}>
                    {capitalize(pokemon.name)}
                </span>

                <span className={styles.types}>
                    {pokemon.types
                        .map((type) => capitalize(type))
                        .join(" / ")}
                </span>
            </div>
        </div>
    );
}
