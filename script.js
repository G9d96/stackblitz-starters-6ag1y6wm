const nav = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('bg-[#0f172a]/95', 'shadow-2xl');
        } else {
            nav.classList.remove('bg-[#0f172a]/95', 'shadow-2xl');
        }
    });