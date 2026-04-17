// --- GESTÃO DE DADOS (Renderização Dinâmica) ---
const methodsData = [
    { title: "Energia Renovável", desc: "Substituição de fósseis por solar e eólica." },
    { title: "Economia Circular", desc: "Redesenho de produtos para desperdício zero." },
    { title: "Reflorestamento", desc: "Recuperação de biomas para captura de carbono." }
];

const faqData = [
    { q: "Como posso reduzir o plástico?", a: "Comece substituindo descartáveis por reutilizáveis e apoiando leis de banimento." },
    { q: "O que é poluição difusa?", a: "É aquela que vem de várias fontes não pontuais, como o escoamento da chuva." }
];

// --- RENDERIZAÇÃO ---
function init() {
    const grid = document.getElementById('solutions-grid');
    methodsData.forEach(item => {
        grid.innerHTML += `
            <article class="card">
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </article>
        `;
    });

    const accordion = document.getElementById('accordion-container');
    faqData.forEach((item, index) => {
        accordion.innerHTML += `
            <div class="accordion-item">
                <button class="accordion-header" onclick="toggleAccordion(${index})" aria-expanded="false">
                    ${item.q}
                </button>
                <div class="accordion-content" id="content-${index}">
                    <p>${item.a}</p>
                </div>
            </div>
        `;
    });
    
    setupScrollReveal();
}

// --- ACESSIBILIDADE: CONTROLE DE FONTE ---
let currentFontSize = 16;
function changeFontSize(action) {
    currentFontSize = action === 'increase' ? currentFontSize + 2 : currentFontSize - 2;
    document.documentElement.style.setProperty('--font-base', currentFontSize + 'px');
}

// --- ACESSIBILIDADE: ALTO CONTRASTE ---
document.getElementById('toggle-contrast').addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});

// --- COMPONENTE: ACORDEÃO ---
function toggleAccordion(index) {
    const contents = document.querySelectorAll('.accordion-content');
    contents[index].classList.toggle('active');
}

// --- COMPONENTE: CARROSSEL BÁSICO ---
let currentSlide = 0;
const track = document.getElementById('carousel-track');
// Adicionar itens ao carrossel
['Oceano Limpo', 'Cidades Verdes', 'Ar Puro'].forEach(text => {
    track.innerHTML += `<div class="carousel-item"><h3>${text}</h3></div>`;
});

document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % 3;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
});

document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + 3) % 3;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
});

// --- SCROLL REVEAL (Observer API) ---
function setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
}

window.onload = init;
