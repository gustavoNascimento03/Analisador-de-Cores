import styles from "./styles.module.css";

export function Header() {
    return (
        <header className={styles.header}>
            <h2 className={`${styles.title} ${styles.animatedGradient}`}>
                Selector Color !
            </h2>
        </header>
    );
}
