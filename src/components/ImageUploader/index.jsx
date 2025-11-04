import { useState } from "react";
import styles from "./styles.module.css";
import { Palette } from "../Palette";
import ColorThief from "colorthief";
import { rgbToHex, getComplementaryColor } from "../../utils/colors";

export function ImageUploader({ onColorSelect, showToast }) {
    const [mainPalette, setMainPalette] = useState([]);
    const [complementaryPalette, setComplementaryPalette] = useState([]);
    const [imagePreview, setImagePreview] = useState(null);

    const handleSwatchClick = (color) => {
        onColorSelect(color);
        showToast(`Cor ${color.toUpperCase()} copiada!`);
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];

        if (!file) {
            setImagePreview(null);
            setMainPalette([]);
            setComplementaryPalette([]);
            return;
        }

        const reader = new FileReader();

        reader.onload = (e) => {
            const imageUrl = e.target.result;

            setImagePreview(imageUrl);

            const img = new Image();

            img.onload = () => {
                try {
                    const colorThief = new ColorThief();
                    const paletteRGB = colorThief.getPalette(img, 10);
                    const newMainPalette = [];
                    const newCompPalette = [];

                    for (const rgb of paletteRGB) {
                        const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
                        newMainPalette.push(hex);

                        const comp = getComplementaryColor(hex);
                        if (comp) newCompPalette.push(comp.hex);
                    }

                    setMainPalette(newMainPalette);
                    setComplementaryPalette(newCompPalette);
                } catch (error) {
                    console.error(
                        "Erro ao processar imagem com ColorThief:",
                        error
                    );
                    showToast("Erro ao ler as cores da imagem.");
                }
            };

            img.src = imageUrl;
        };

        reader.readAsDataURL(file);
    };

    return (
        <div className={styles.uploaderContainer}>
            {/* ... (o resto do seu JSX) ... */}

            <input
                type="file"
                id="fileInput"
                className={styles.hiddenInput}
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleImageUpload}
            />

            {imagePreview && (
                <img
                    src={imagePreview}
                    alt="Preview"
                    className={styles.imagePreview}
                />
            )}

            <Palette
                title="Paleta da Imagem"
                colors={mainPalette}
                onColorClick={handleSwatchClick}
            />
            <Palette
                title="Cores Complementares"
                colors={complementaryPalette}
                onColorClick={handleSwatchClick}
            />
        </div>
    );
}
