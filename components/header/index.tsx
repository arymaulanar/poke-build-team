"use client"

import PokeBallIcon from '@/assets/icons/PokeBallIcon'
import styles from './header.module.css'
import { useRosterStore } from '@/lib/store/rosterStore';

export function Header() {
    const roster = useRosterStore((state) => state.roster);
    const rosterCount = roster.filter(Boolean).length;
    return <div className={styles.container}>
        <h1 className={styles.title}>Pokedex Builder</h1>
        <div className={styles.counterContainer}>
            <PokeBallIcon />
            <span className={styles.counter}>{`${rosterCount}/6`}</span>
        </div>
    </div>
}