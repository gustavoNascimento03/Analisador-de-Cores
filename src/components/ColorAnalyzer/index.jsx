// Importe o useState e useEffect
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { ImageUploader } from "../ImageUploader";
import { ManualColorPicker } from "../ManualColorPicker";
import { ColorCard } from "../ColorCard";
import { Divider } from "../Divider";
import { Toast } from "../Toast";

function hexToRgb(hex) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : null;
}

function rgbToHex(r, g, b) {
    r = Math.round(r);
    g = Math.round(g);
    b = Math.round(b);
    return (
        "#" +
        ((1 << 24) + (r << 16) + (g << 8) + b)
            .toString(16)
            .slice(1)
            .toUpperCase()
    );
}

function getComplementaryColor(hex) {
    const rgb = hexToRgb(hex);
    if (!rgb) return null;
    const r = 255 - rgb.r;
    const g = 255 - rgb.g;
    const b = 255 - rgb.b;
    const compHex = rgbToHex(r, g, b);
    return {
        hex: compHex,
        rgb: `rgb(${r}, ${g}, ${b})`,
    };
}

export function ColorAnalyzer() {
    // --- ESTADOS DA APLICAÇÃO ---
    const [toast, setToast] = useState({ message: "", visible: false });

    const [selectedColor, setSelectedColor] = useState({
        hex: "#34D399",
        rgb: "rgb(52, 211, 153)",
    });
    const [complementaryColor, setComplementaryColor] = useState({
        hex: "#CB2C6A",
        rgb: "rgb(203, 44, 106)",
    });

    const showToast = (message) => {
        setToast({ message, visible: true });
    };

    useEffect(() => {
        if (!toast.visible) return;
        const timer = setTimeout(() => {
            setToast({ ...toast, visible: false });
        }, 3000);
        return () => clearTimeout(timer);
    }, [toast]);

    // A função que vai ATUALIZAR as cores
    const handleColorChange = (newHex) => {
        const newRgb = hexToRgb(newHex);
        const newComp = getComplementaryColor(newHex);

        if (!newRgb || !newComp) return; // Cor inválida

        setSelectedColor({
            hex: newHex.toUpperCase(),
            rgb: `rgb(${newRgb.r}, ${newRgb.g}, ${newRgb.b})`,
        });

        setComplementaryColor(newComp);
    };

    return (
        <main className={styles.analyzerContainer}>
            {" "}
            <h1 className={`${styles.mainTitle} ${styles.animatedGradient}`}>
                Analisador de Cores PRO
            </h1>
            {/* === Seção 1 === */}{" "}
            <ImageUploader
                onColorSelect={handleColorChange}
                showToast={showToast}
            />
            {/* === Divisor === */}
            <Divider text="Ver Mais" /> {/* === Seção 2 === */}{" "}
            <ManualColorPicker
                initialColor={selectedColor.hex}
                onColorChange={handleColorChange}
            />
            {/* === Seção 3 === */}{" "}
            <div className={styles.resultsGrid}>
                {" "}
                <ColorCard
                    title="Cor Selecionada"
                    hex={selectedColor.hex}
                    rgb={selectedColor.rgb}
                    onCopy={showToast}
                />{" "}
                <ColorCard
                    title="Cor Complementar"
                    hex={complementaryColor.hex}
                    rgb={complementaryColor.rgb}
                    onCopy={showToast}
                />{" "}
            </div>{" "}
            <Toast message={toast.message} visible={toast.visible} />{" "}
        </main>
    );
}
