import { useState } from "react";
import { Header } from "./components/Header";
import { ColorAnalyzer } from "./components/ColorAnalyzer";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
    return (
        <div className={styles.appContainer}>
            <Header />
            <ColorAnalyzer />
            <Footer />
        </div>
    );
}

export default App;
