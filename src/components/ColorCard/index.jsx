import styles from "./styles.module.css";

export function ColorCard({ title, hex, rgb }) {
    const colorStyle = {
        backgroundColor: hex,
    };

    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>

            <div className={styles.colorBox} style={colorStyle}></div>

            <div className={styles.info}>
                <p className={styles.hex} title="Clique para copiar">
                    {hex}
                </p>
                <p className={styles.rgb}>{rgb}</p>
            </div>
        </div>
    );
}
