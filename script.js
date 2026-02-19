const translations = {
    pt: {
        "nav-projects": "Projetos",
        "nav-contact": "Contato",
        "header-main": "Web Design",
        "header-grad": "Minimalista.",
        "hero-desc": "Portfolio de Matheus Godoy. Projetos feitos 100% no código.",
        "hover-hint": "Passe o mouse para explorar",
        "nexus-nav-1": "Soluções",
        "nexus-nav-2": "Cases",
        "nexus-nav-3": "Falar com Especialista",
        "nexus-tag": "Líderes em Automação",
        "nexus-title": "Escalamos sua operação com <span class='text-blue-600'>I.A.</span>",
        "nexus-p": "Transformamos processos manuais em fluxos digitais inteligentes de alta performance.",
        "nexus-btn-1": "Ver Soluções",
        "nexus-btn-2": "Sobre nós",
        "nexus-card-1": "Infraestrutura resiliente para grandes volumes.",
        "nexus-card-2": "Análise preditiva para decisão em tempo real.",
        "nexus-cta": "Pronto para o futuro?",
        "nexus-btn-3": "Agendar Diagnóstico Grátis",
        "case-1-title": "Landing Page Corporativa",
        "case-1-desc": "Projeto desenvolvido com foco em conversão e design minimalista modular.",
        "aura-tag": "Coleção Atemporal 2026",
        "aura-title": "A essência do <span class='text-amber-400'>luxo</span> digital.",
        "aura-p": "Peças exclusivas forjadas com precisão e elegância.",
        "aura-btn-1": "Ver Coleção",
        "aura-cta": "Sinta a exclusividade",
        "aura-btn-2": "Agendar Consultoria VIP",
        "hover-lux": "Design de Luxo • Scroll",
        "case-2-title": "E-commerce de Alto Padrão",
        "case-2-desc": "Interface focada em storytelling e estética de luxo para marcas premium.",
        "eco-tag": "Energia Limpa & Sustentável",
        "eco-title": "O futuro da <span class='text-emerald-500'>energia</span> é agora.",
        "eco-p": "Monitore seu consumo e reduza sua pegada de carbono em tempo real.",
        "eco-btn-1": "Simular Impacto",
        "eco-stat-1": "CO2 Reduzido",
        "eco-stat-2": "Árvores Salvas",
        "hover-eco": "Interface Light Mode • Explore",
        "case-3-title": "Dashboard de Sustentabilidade",
        "case-3-desc": "Interface limpa focada em visualização de dados e impacto ambiental.",
        "footer-title": "Bora criar algo",
        "footer-grad": "épico?",
        "footer-desc": "Estou disponível para novos projetos de desenvolvimento web e consultorias de UI/UX em 2026.",
        "wa-btn": "Me chama no WhatsApp",
        "loc-title": "Localização",
        "loc-city": "Cotia, São Paulo — Brasil",
        "copy": "© 2026 Matheus Godoy. Todos os direitos reservados."
    },
    en: {
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "header-main": "Minimalist",
        "header-grad": "Web Design.",
        "hero-desc": "Matheus Godoy's Portfolio. Projects built 100% with code.",
        "hover-hint": "Hover to explore",
        "nexus-nav-1": "Solutions",
        "nexus-nav-2": "Cases",
        "nexus-nav-3": "Talk to Specialist",
        "nexus-tag": "Automation Leaders",
        "nexus-title": "Scaling your operation with <span class='text-blue-600'>A.I.</span>",
        "nexus-p": "Transforming manual processes into high-performance intelligent digital workflows.",
        "nexus-btn-1": "View Solutions",
        "nexus-btn-2": "About us",
        "nexus-card-1": "Resilient infrastructure for large volumes.",
        "nexus-card-2": "Predictive analysis for real-time decision.",
        "nexus-cta": "Ready for the future?",
        "nexus-btn-3": "Schedule Free Diagnosis",
        "case-1-title": "Corporate Landing Page",
        "case-1-desc": "Project developed focusing on conversion and modular minimalist design.",
        "aura-tag": "Timeless Collection 2026",
        "aura-title": "The essence of digital <span class='text-amber-400'>luxury</span>.",
        "aura-p": "Exclusive pieces forged with precision and elegance.",
        "aura-btn-1": "View Collection",
        "aura-cta": "Feel the exclusivity",
        "aura-btn-2": "Schedule VIP Consulting",
        "hover-lux": "Luxury Design • Scroll",
        "case-2-title": "High-End E-commerce",
        "case-2-desc": "Interface focused on storytelling and luxury aesthetics for premium brands.",
        "eco-tag": "Clean & Sustainable Energy",
        "eco-title": "The future of <span class='text-emerald-500'>energy</span> is now.",
        "eco-p": "Monitor your consumption and reduce your carbon footprint in real-time.",
        "eco-btn-1": "Simulate Impact",
        "eco-stat-1": "Reduced CO2",
        "eco-stat-2": "Trees Saved",
        "hover-eco": "Interface Light Mode • Explore",
        "case-3-title": "Sustainability Dashboard",
        "case-3-desc": "Clean interface focused on data visualization and environmental impact.",
        "footer-title": "Let's build something",
        "footer-grad": "epic?",
        "footer-desc": "Available for new web development projects and UI/UX consulting in 2026.",
        "wa-btn": "Message me on WhatsApp",
        "loc-title": "Location",
        "loc-city": "Cotia, São Paulo — Brazil",
        "copy": "© 2026 Matheus Godoy. All rights reserved."
    }
};

let currentLang = 'pt';

function updateLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.innerHTML = translations[currentLang][key];
        }
    });
}

// Inicialização de todas as funções
document.addEventListener('DOMContentLoaded', () => {
    
    // Lógica do Botão de Idioma
    // Lógica do Botão de Idioma Corrigida
const langBtn = document.getElementById('lang-switch');
if(langBtn) {
    langBtn.addEventListener('click', () => {
        if (currentLang === 'pt') {
            currentLang = 'en';
            langBtn.innerText = 'EN'; // Se mudou para inglês, o botão oferece voltar para PT
        } else {
            currentLang = 'pt';
            langBtn.innerText = 'PT'; // Se mudou para português, o botão oferece mudar para EN
        }
        updateLanguage();
    });
}

    // Lógica do Scroll do Nav (O código que você pediu)
    const nav = document.getElementById('main-nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('bg-[#0f172a]/95', 'shadow-2xl');
            } else {
                nav.classList.remove('bg-[#0f172a]/95', 'shadow-2xl');
            }
        });
    }
});