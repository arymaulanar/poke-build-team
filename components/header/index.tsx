import styles from './header.module.css'

export function Header() {
    return <div className={styles.container}>
        <h1 className={styles.title}>Pokedex Builder</h1>
        <div className={styles.counter}>1/6</div>
    </div>
}