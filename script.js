/* Mehr lesen Toggle */
const btn = document.getElementById('toggleMehr');
const mehrText = document.getElementById('mehrText');

btn.addEventListener('click', () => {
    const hidden = mehrText.hasAttribute('hidden');
    if (hidden) {
        mehrText.removeAttribute('hidden');
        btn.textContent = 'Weniger anzeigen';
        btn.setAttribute('aria-expanded','true');
    } else {
        mehrText.setAttribute('hidden','');
        btn.textContent = 'Mehr lesen';
        btn.setAttribute('aria-expanded','false');
    }
});

/* Projektkarten SlideUp */
document.addEventListener('DOMContentLoaded', () => {
    const projekte = document.querySelectorAll('.projekt-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if(entry.isIntersecting){
                setTimeout(()=>{ entry.target.classList.add('visible'); }, index*200);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold:0.1 });

    projekte.forEach(projekt => observer.observe(projekt));
});
