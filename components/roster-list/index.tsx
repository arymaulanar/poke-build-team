import { Pokemon } from "@/lib/models/Pokemon";
import styles from "./roster-list.module.css";
import RosterItem from "../roster-item";
import { MAX_ROSTER_SIZE } from "@/lib/utils/constants";

type RosterListProps = {
    roster: Array<Pokemon | null>;
};

export default function RosterList({ roster }: RosterListProps) {
    const slots = Array.from(
        { length: MAX_ROSTER_SIZE },
        (_, index) => roster[index] ?? null
    );

    const totalBaseXp = roster.reduce(
        (total, pokemon) => total + (pokemon?.baseExperience ?? 0),
        0
    );

    return (
        <section className={styles.roster}>
            <div className={styles.list}>
                {slots.map((pokemon, index) => (
                    <RosterItem
                        key={pokemon?.id ?? `empty-${index}`}
                        pokemon={pokemon}
                    />
                ))}
            </div>

            <footer className={styles.footer}>
                <span>Total Base XP:</span>
                <strong>{totalBaseXp}</strong>
            </footer>
        </section>
    );
}