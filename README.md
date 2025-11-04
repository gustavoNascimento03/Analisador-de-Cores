# 🎨 Analisador de Cores PRO

Esse projeto é uma ferramenta interna para análise de cores. O objetivo é simples: extrair paletas de cores (principais e complementares) de qualquer imagem, além de permitir a seleção manual de cores.

É uma "mão na roda" para designers e desenvolvedores front-end agilizarem a criação de temas e identidade visual.

---

## 🔥 Features (O que ele faz)

* **Upload de Imagem:** Permite que o usuário envie uma imagem (JPG, PNG) do seu computador.
* **Extração de Paleta:** Usa o `ColorThief` para processar a imagem e extrair as 10 cores dominantes.
* **Paleta Complementar:** Calcula e exibe automaticamente a paleta de cores complementares.
* **Seletor Manual:** Um `<input type="color">` para o usuário selecionar uma cor específica manualmente.
* **Cards de Resultado:** Exibe a cor selecionada e sua complementar em destaque.
* **Copiar com 1 Clique:** O usuário pode clicar no código HEX de qualquer cor (nos cards ou nas paletas) para copiá-lo para a área de transferência.
* **Feedback Visual:** Um "Toast" (notificação) aparece no canto da tela confirmando que a cor foi copiada.

---

## 🛠️ Stack de Tecnologias (O "Feijão com Arroz" bem feito)

A filosofia aqui é **Simplicidade e Eficácia**. Usamos ferramentas robustas e sem firula desnecessária.

* **[React](https://reactjs.org/):** Biblioteca principal para a construção da UI. Toda a lógica é baseada em Hooks (`useState`, `useEffect`).
* **[CSS Modules](https://github.com/css-modules/css-modules):** Para manter o estilo de cada componente 100% isolado. Sem "vazamento" de CSS, sem `!important`.
* **[ColorThief.js](https://lokeshdhakar.com/projects/color-thief/):** A biblioteca que faz o trabalho pesado de "ler" os pixels da imagem e extrair a paleta de cores.
* **FileReader API:** API nativa do navegador usada para ler o arquivo de imagem enviado pelo usuário e convertê-lo para Data URL.

### 🏛️ Arquitetura

O projeto segue uma arquitetura componentizada clássica:

* **`App.jsx`**: O esqueleto principal, apenas organiza os blocos de layout.
* **`ColorAnalyzer.jsx`**: O componente "inteligente" (ou *smart component*). Ele é o "cérebro" do app, responsável por:
    * Gerenciar todo o estado (cor selecionada, paletas, toast).
    * Conter as funções de lógica (`handleColorChange`, `showToast`).
    * Orquestrar os componentes "burros".
* **Componentes "Burros" (`/components`)**: Uma coleção de componentes reutilizáveis que apenas recebem *props* (dados e funções) e exibem a UI (`ColorCard`, `Palette`, `ImageUploader`, `Toast`, etc.).

---

## 🚀 Como Rodar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone [URL_DO_SEU_REPO_AQUI]
    cd [NOME_DA_PASTA_DO_PROJETO]
    ```

2.  **Instale as dependências:**
    (A gente usou `colorthief`, então precisa instalar.)
    ```bash
    npm install
    ```

3.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

4.  Abra `http://localhost:5173` (ou a porta que o Vite indicar) no seu navegador.

---
