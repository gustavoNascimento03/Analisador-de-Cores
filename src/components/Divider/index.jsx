import styles from "./styles.module.css";

export function Divider({ text = "Ver Mais" }) {
    return (
        <div className={styles.container}>
            <span className={styles.line}></span>

            <span className={styles.text}>{text}</span>

            <span className={styles.line}></span>
        </div>
    );
}
