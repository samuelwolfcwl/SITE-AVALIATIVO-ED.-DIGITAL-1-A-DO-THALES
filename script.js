// --- DATABASE MOCK (Gestão de Dados) ---
const methods = [
    {
        title: "Energia Renovável",
        desc: "Substituição de combustíveis fósseis por fontes solar e eólica para reduzir a poluição do ar.",
        image: "https://images.unsplash.com/photo-1466611653911-954ffaa13f6c?auto=format&fit=crop&w=600"
    },
    {
        title: "Economia Circular",
        desc: "Foco no reaproveitamento e reciclagem total para eliminar resíduos em aterros e oceanos.",
        image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600"
    },
    {
        title: "Reflorestamento",
        desc: "Plante árvores para absorver CO2 e filtrar poluentes do solo e da água naturalmente.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600"
    }
];

// --- RENDERIZAÇÃO DINÂMICA ---
function init() {
    const grid = document.getElementById('solutions-grid');
    
    methods.forEach(item => {
        const card = `
            <article class="card">
                <img src="${item.image}" alt="Representação visual de ${item.title}">
                <div class="card-content">
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                </div>
            </article>
        `;
        grid.innerHTML += card;
    });

    setupCarousel();
    setupScrollReveal();
}

// --- ACESSIBILIDADE: CONTROLE DE FONTE ---
let fontSize = 16;
function updateFontSize(delta) {
    fontSize += delta * 2;
    document.documentElement.style.setProperty('--font-size', fontSize + 'px');
