/* --- DESIGN SYSTEM & VARIÁVEIS --- */
:root {
    --primary: #2d6a4f;
    --secondary: #d8f3dc;
    --accent: #1b4332;
    --bg: #ffffff;
    --text: #2b2d42;
    --radius: 16px;
    --font-size: 16px;
    --transition: 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

/* --- ALTO CONTRASTE --- */
body.high-contrast {
    --primary: #ffff00;
    --bg: #000000;
    --text: #ffffff;
    --secondary: #333333;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
    font-size: var(--font-size);
    font-family: 'Segoe UI', system-ui, sans-serif;
    background-color: var(--bg);
    color: var(--text);
    line-height: 1.6;
    overflow-x: hidden;
}

/* --- GRID & FLEXBOX (Layout Responsivo) --- */
.grid-container {
    display: grid;
    gap: 2rem;
    padding: 2rem;
    /* Grid dinâmico: 1 col mobile, 3 col desktop */
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

header {
    background: var(--primary);
    padding: 1rem 5%;
    position: sticky;
    top: 0;
    z-index: 1000;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* --- COMPONENTES --- */
.card {
    background: var(--secondary);
    border-radius: var(--radius);
    overflow: hidden;
    transition: var(--transition);
}

.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-content { padding: 1.5rem; }

/* --- CARROSSEL --- */
.carousel {
    position: relative;
    width: 90%;
    margin: 3rem auto;
    overflow: hidden;
    border-radius: var(--radius);
}

.carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.slide {
    min-width: 100%;
    height: 400px;
}

.slide img { width: 100%; height: 100%; object-fit: cover; }

/* --- ANIMAÇÕES (Scroll Reveal) --- */
.scroll-reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: var(--transition);
}

.scroll-reveal.active {
    opacity: 1;
    transform: translateY(0);
}

/* Botões de Acessibilidade */
.accessibility-toolbar button {
    background: var(--accent);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    margin-left: 0.5rem;
    cursor: pointer;
    border-radius: 4px;
}
