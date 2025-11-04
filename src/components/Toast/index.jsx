import styles from "./styles.module.css";

export function Toast({ message, visible = false }) {
    const toastClasses = `
    ${styles.toast} 
    ${!visible ? styles.hidden : ""}
  `;

    // Se não tiver mensagem, a gente nem se dá ao trabalho.
    if (!message) {
        return null;
    }

    return (
        <div className={toastClasses} role="alert">
            {message}
        </div>
    );
}
