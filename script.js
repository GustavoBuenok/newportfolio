// Atualiza o ano no footer
document.getElementById('ano-atual').textContent = new Date().getFullYear();

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Animação das barras de progresso das habilidades
const animateSkills = () => {
    document.querySelectorAll('.progress').forEach(progress => {
        const level = progress.getAttribute('data-level');
        progress.style.width = `${level}%`;
    });
};

// Animação de fade-in para cards
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Anima as barras de progresso quando os cards de habilidades ficam visíveis
            if (entry.target.classList.contains('skill-card')) {
                setTimeout(animateSkills, 300);
            }
        }
    });
}, {
    threshold: 0.1
});

// Aplica as animações aos elementos
const animatedElements = document.querySelectorAll('.skill-card, .sobre-content, .contato-card');
animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(element);
});