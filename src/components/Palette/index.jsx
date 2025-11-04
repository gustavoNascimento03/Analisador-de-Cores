import styles from "./styles.module.css";
import { ColorSwatch } from "../ColorSwatch";

// Recebe um título e um array de cores
export function Palette({ title, colors = [] }) {
    // Se não tiver cores, nem mostra
    if (colors.length === 0) {
        return null;
    }

    return (
        <>
            <h3 className={styles.paletteTitle}>{title}</h3>
            <div className={styles.paletteGrid}>
                {colors.map((color) => (
                    <ColorSwatch key={color} color={color} />
                ))}
            </div>
        </>
    );
}
