const nav = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('bg-[#0f172a]/95', 'shadow-2xl');
        } else {
            nav.classList.remove('bg-[#0f172a]/95', 'shadow-2xl');
        }
    });

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
    const langBtn = document.getElementById('lang-switch');
    
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'pt' ? 'en' : 'pt';
        langBtn.innerText = currentLang === 'pt' ? 'EN' : 'PT';
        updateLanguage();
    });
    
    function updateLanguage() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                element.innerHTML = translations[currentLang][key];
            }
        });
    }
    
    // Manter o efeito de scroll do seu nav
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('main-nav');
        if (window.scrollY > 50) {
            nav.classList.add('bg-[#0f172a]/80', 'backdrop-blur-md');
        } else {
            nav.classList.remove('bg-[#0f172a]/80', 'backdrop-blur-md');
        }
    });