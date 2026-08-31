import { Pokemon } from "@/lib/models/Pokemon";
import styles from "./roster-list.module.css";
import RosterItem from "../roster-item";

type RosterListProps = {
    roster: Pokemon[];
};

const MAX_ROSTER_SIZE = 6;

export default function RosterList({ roster }: RosterListProps) {
    const slots = Array.from(
        { length: MAX_ROSTER_SIZE },
        (_, index) => roster[index]
    );

    const totalBaseXp = roster.reduce(
        (total, pokemon) => total + pokemon.baseExperience,
        0
    );

    return (
        <section className={styles.roster}>
            <header className={styles.header}>
                <h2>Your Team</h2>

                <button
                    type="button"
                    className={styles.closeButton}
                    aria-label="Close team roster"
                >
                    ×
                </button>
            </header>

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