import styles from "./styles.module.css";

export function ManualColorPicker({ value, onColorChange }) {
    return (
        <div className={styles.container}>
            <label htmlFor="colorPicker" className={styles.label}>
                Selecione uma cor manualmente:
            </label>
            <input
                type="color"
                id="colorPicker"
                className={styles.colorInput}
                value={value}
                onChange={(e) => onColorChange(e.target.value)}
            />
        </div>
    );
}
