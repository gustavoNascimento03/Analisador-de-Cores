import styles from "./styles.module.css";

export function ManualColorPicker() {
    return (
        <div className={styles.pickerContainer}>
            <label htmlFor="colorPicker" className={styles.label}>
                Selecione uma cor manualmente:
            </label>
            <input
                type="color"
                id="colorPicker"
                value="#0053a1ff"
                className={styles.colorInput}
            />
        </div>
    );
}
