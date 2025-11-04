import styles from "./styles.module.css";
import { ColorSwatch } from "../ColorSwatch";

export function Palette({ title, colors = [], onColorClick }) {
    // Se não tiver cores, nem mostra
    if (colors.length === 0) {
        return null;
    }

    return (
        <>
            <h3 className={styles.paletteTitle}>{title}</h3>
            <div className={styles.paletteGrid}>
                {colors.map((color) => (
                    <ColorSwatch
                        key={color}
                        color={color}
                        onClick={onColorClick}
                    />
                ))}
            </div>
        </>
    );
}
