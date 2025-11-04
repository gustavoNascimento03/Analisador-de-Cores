import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { ImageUploader } from "../ImageUploader";
import { ManualColorPicker } from "../ManualColorPicker";
import { ColorCard } from "../ColorCard";
import { Divider } from "../Divider";
import { Toast } from "../Toast";
import { hexToRgb, getComplementaryColor } from "../../utils/colors";

export function ColorAnalyzer() {
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

    const handleColorChange = (newHex) => {
        const newRgb = hexToRgb(newHex);
        const newComp = getComplementaryColor(newHex);

        if (!newRgb || !newComp) {
            showToast("Cor inválida!");
            return;
        }

        setSelectedColor({
            hex: newHex.toUpperCase(),
            rgb: `rgb(${newRgb.r}, ${newRgb.g}, ${newRgb.b})`,
        });

        setComplementaryColor(newComp);
    };

    useEffect(() => {
        if (!toast.visible) return;

        const timer = setTimeout(() => {
            setToast({ ...toast, visible: false });
        }, 3000); // 3 segundos

        return () => clearTimeout(timer);
    }, [toast]);

    return (
        <main className={styles.analyzerContainer}>
            {" "}
            <h1 className={`${styles.mainTitle} ${styles.animatedGradient}`}>
                Analisador de Cores PRO{" "}
            </h1>
            {/* === Seção 1 === */}{" "}
            <ImageUploader
                onColorSelect={handleColorChange}
                showToast={showToast}
            />
            {/* === Divisor === */}
            <Divider text="Ver Mais" />
            {/* === Seção 2 (A CORREÇÃO) === */}{" "}
            <ManualColorPicker
                value={selectedColor.hex}
                onColorChange={handleColorChange}
            />
            {/* === Seção 3 (LIMPO) === */}{" "}
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
            </div>
            <Toast message={toast.message} visible={toast.visible} />{" "}
        </main>
    );
}
