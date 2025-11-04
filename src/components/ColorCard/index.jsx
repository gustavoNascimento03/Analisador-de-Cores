// components/ColorCard/index.jsx
import styles from "./styles.module.css";

export function ColorCard({ title, hex, rgb, onCopy }) {
    const colorStyle = {
        backgroundColor: hex,
    };

    const handleCopyClick = () => {
        if (onCopy) {
            onCopy(`Cor ${hex} copiada!`);
        }
    };

    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.colorBox} style={colorStyle}></div>
            <div className={styles.info}>
                <p
                    className={styles.hex}
                    title="Clique para copiar"
                    onClick={handleCopyClick}
                >
                    {hex}
                </p>
                <p className={styles.rgb}>{rgb}</p>
            </div>
        </div>
    );
}
