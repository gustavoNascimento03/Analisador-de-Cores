import styles from "./styles.module.css";
import { Palette } from "../Palette";

export function ImageUploader() {
    const fakePalette = ["#FF0000", "#00FF00", "#0000FF"];

    return (
        <div className={styles.uploaderContainer}>
            <p className={styles.prompt}>Comece enviando uma imagem</p>

            <label htmlFor="fileInput" className={styles.uploadButton}>
                <span>Enviar Imagem</span>
            </label>
            <input type="file" id="fileInput" className={styles.hiddenInput} />
            <p className={styles.hint}>
                Extraia a paleta de cores de uma foto.
            </p>

            <Palette
                title="Paleta da Imagem (Clique para copiar)"
                colors={fakePalette}
            />

            <Palette
                title="Cores Complementares (Clique para copiar)"
                colors={fakePalette}
            />
        </div>
    );
}
