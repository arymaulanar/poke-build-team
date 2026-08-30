import styles from './footer.module.css'

export function Footer() {
    return <div className={styles.container}>
        <button className={styles.button}>
            {`[View Teams (0/6) & Stats]`}
        </button>
    </div>
}