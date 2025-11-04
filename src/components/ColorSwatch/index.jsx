import styles from "./styles.module.css";

export function ColorSwatch({ color, onClick }) {
    const swatchStyle = {
        backgroundColor: color,
    };

    const swatchTitle = `${color.toUpperCase()}\nClique para selecionar e copiar`;

    const handleClick = () => {
        if (onClick) {
            onClick(color);
        }
    };

    return (
        <button
            type="button"
            className={styles.swatch}
            style={swatchStyle}
            title={swatchTitle}
            onClick={handleClick}
            aria-label={`Selecionar cor ${color}`}
        />
    );
}
