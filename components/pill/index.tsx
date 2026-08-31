import styles from "./pill.module.css"

interface PillProps {
    text: string;
    textColorHex: string;
    backgroundHex: string;
}

export const Pill: React.FC<PillProps> = ({ text, textColorHex = "#000", backgroundHex = "#FFF" }: PillProps) => {
    return <div className={styles.container} style={{ background: backgroundHex }}>
        <span className={styles.text} style={{ color: textColorHex }}>
            {text}
        </span>
    </div>
}
