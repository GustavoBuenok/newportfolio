// 🌍 OBJETO COM TODOS OS TEXTOS EM PT-BR E EN-US
const translations = {
    pt: {
        nav: {
            inicio: 'Início',
            sobre: 'Sobre',
            habilidades: 'Habilidades',
            projetos: 'Projetos',
            contato: 'Contato'
        },
        hero: {
            titulo: 'Olá, eu sou',
            nome: 'Gustavo',
            profissao: 'Desenvolvedor full stack',
            descricao: 'Criando soluções digitais que otimizam processos e melhoram a experiência dos usuários, combinando design e funcionalidade.',
            btnContato: 'Entre em Contato',
            btnSaiba: 'Saiba Mais'
        },
        sobre: {
            titulo: 'Sobre Mim',
            paragrafo1: 'Sou Gustavo Bueno, desenvolvedor full stack, apaixonado por tecnologia e inovação. Minha jornada na programação começou com a curiosidade de entender como as aplicações funcionam e rapidamente se tornou minha profissão e paixão.',
            paragrafo2: 'Atualmente, trabalho na PiU Comunica, onde atuo como desenvolvedor front-end. Além disso, desenvolvo projetos próprios e freelancers, criando sistemas, landing pages e bots.',
            paragrafo3: 'Tenho experiência com JavaScript, Node.js, MongoDB, MySQL, React e PHP, além de conhecimentos em metodologias ágeis como Scrum e Kanban.',
            meses: 'Meses de experiência',
            projetos: 'Projetos Pessoais',
            tecnologias: 'Tecnologias'
        },
        habilidades: {
            titulo: 'Minhas Habilidades',
            skills: {
                html: { nome: 'HTML & CSS', desc: 'Criação de layouts responsivos e estilização moderna de páginas web' },
                js: { nome: 'JavaScript', desc: 'Desenvolvimento de interatividade e funcionalidades dinâmicas' },
                nodejs: { nome: 'Node JS', desc: 'Desenvolvimento backend' },
                react: { nome: 'React', desc: 'Framework front end' },
                tailwind: { nome: 'Tailwind', desc: 'Framework css' },
                tools: { nome: 'Ferramentas', desc: 'VS Code, Git e ferramentas essenciais para desenvolvimento' }
            }
        },
        projetos: {
            titulo: 'Meus Projetos',
            verProjeto: 'Ver Projeto',
            verAoVivo: 'Ver ao Vivo',
            repositorio: 'Repositório',
            projetos_list: {
                clinica: {
                    titulo: 'Clínica Essence',
                    desc: 'Landing page desenvolvida para clínicas estéticas'
                },
                advocacia: {
                    titulo: 'Silva & Advogados',
                    desc: 'Landing page desenvolvida para escritorios de advocacia'
                },
                vet: {
                    titulo: 'Clínica Vet',
                    desc: 'Landing page desenvolvida para clínicas veterinarias'
                }
            },
            github: {
                titulo: 'Veja todos os projetos',
                desc: 'Explore todos os meus repositórios e projetos no GitHub.',
                btn: 'Ver no GitHub'
            }
        },
        contato: {
            titulo: 'Vamos Conversar',
            email: 'Email',
            github: 'GitHub',
            linkedin: 'LinkedIn',
            whatsapp: 'Whatsapp'
        },
        footer: {
            texto: 'Desenvolvido com 💙 por Gustavo Bueno'
        }
    },
    en: {
        nav: {
            inicio: 'Home',
            sobre: 'About',
            habilidades: 'Skills',
            projetos: 'Projects',
            contato: 'Contact'
        },
        hero: {
            titulo: 'Hello, I am',
            nome: 'Gustavo',
            profissao: 'Full stack developer',
            descricao: 'Creating digital solutions that optimize processes and improve user experience, combining design and functionality.',
            btnContato: 'Get in Touch',
            btnSaiba: 'Learn More'
        },
        sobre: {
            titulo: 'About Me',
            paragrafo1: 'I am Gustavo Bueno, a full stack developer passionate about technology and innovation. My journey in programming started with curiosity about how applications work and quickly became my profession and passion.',
            paragrafo2: 'Currently, I work at PiU Comunica as a front-end developer. Additionally, I develop personal and freelance projects, creating systems, landing pages, and bots.',
            paragrafo3: 'I have experience with JavaScript, Node.js, MongoDB, MySQL, React, and PHP, as well as knowledge of agile methodologies such as Scrum and Kanban.',
            meses: 'Months of experience',
            projetos: 'Personal Projects',
            tecnologias: 'Technologies'
        },
        habilidades: {
            titulo: 'My Skills',
            skills: {
                html: { nome: 'HTML & CSS', desc: 'Creating responsive layouts and modern web page styling' },
                js: { nome: 'JavaScript', desc: 'Developing interactivity and dynamic functionality' },
                nodejs: { nome: 'Node JS', desc: 'Backend development' },
                react: { nome: 'React', desc: 'Front end framework' },
                tailwind: { nome: 'Tailwind', desc: 'CSS framework' },
                tools: { nome: 'Tools', desc: 'VS Code, Git, and essential development tools' }
            }
        },
        projetos: {
            titulo: 'My Projects',
            verProjeto: 'View Project',
            verAoVivo: 'Live Preview',
            repositorio: 'Repository',
            projetos_list: {
                clinica: {
                    titulo: 'Essence Clinic',
                    desc: 'Landing page developed for aesthetic clinics'
                },
                advocacia: {
                    titulo: 'Silva & Lawyers',
                    desc: 'Landing page developed for law offices'
                },
                vet: {
                    titulo: 'Vet Clinic',
                    desc: 'Landing page developed for veterinary clinics'
                }
            },
            github: {
                titulo: 'See all projects',
                desc: 'Explore all my repositories and projects on GitHub.',
                btn: 'View on GitHub'
            }
        },
        contato: {
            titulo: 'Let\'s Talk',
            email: 'Email',
            github: 'GitHub',
            linkedin: 'LinkedIn',
            whatsapp: 'Whatsapp'
        },
        footer: {
            texto: 'Developed with 💙 by Gustavo Bueno'
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {

    // ── Theme Toggle ────────────────────────────────────────────
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || 'light';

    // Aplica o tema salvo ao carregar a página
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    // Event listener para o botão de tema
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
    }

    // ── Language Toggle ────────────────────────────────────────────
    let currentLanguage = localStorage.getItem('language') || 'pt';
    const languageToggle = document.getElementById('language-toggle');

    // Função para atualizar todos os textos
    function updateLanguage(lang) {
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        
        // Atualiza o atributo de idioma no HTML
        document.documentElement.lang = lang;
        
        // Atualiza o botão
        updateLanguageButton();
        
        // Atualiza TODOS os textos da página
        updateNavigation(lang);
        updateHero(lang);
        updateSobre(lang);
        updateHabilidades(lang);
        updateProjetos(lang);
        updateContato(lang);
        updateFooter(lang);
    }

    // Função para atualizar o botão
    function updateLanguageButton() {
        languageToggle.textContent = currentLanguage === 'pt' ? '🇺🇸 EN' : '🇧🇷 PT';
        languageToggle.classList.toggle('active', currentLanguage === 'en');
    }

    // Event listener para o botão
    languageToggle.addEventListener('click', () => {
        const newLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
        updateLanguage(newLanguage);
    });

    // Funções específicas para atualizar cada seção
    function updateNavigation(lang) {
        const t = translations[lang].nav;
        document.querySelectorAll('nav ul li a').forEach((link, index) => {
            const keys = ['inicio', 'sobre', 'habilidades', 'projetos', 'contato'];
            link.textContent = t[keys[index]];
        });
    }

    function updateHero(lang) {
        const t = translations[lang].hero;
        document.querySelector('.hero-text h1').innerHTML = `${t.titulo} <span class="highlight">${t.nome}</span>`;
        document.querySelector('.subtitle').textContent = t.profissao;
        document.querySelector('.description').textContent = t.descricao;
        const botoes = document.querySelectorAll('.hero-text .cta-buttons .btn');
        botoes[0].textContent = t.btnContato;
        botoes[1].textContent = t.btnSaiba;
    }

    function updateSobre(lang) {
        const t = translations[lang].sobre;
        document.querySelector('.sobre h2').textContent = t.titulo;
        const paragrafos = document.querySelectorAll('.sobre-text p');
        paragrafos[0].textContent = t.paragrafo1;
        paragrafos[1].textContent = t.paragrafo2;
        paragrafos[2].textContent = t.paragrafo3;
        
        const stats = document.querySelectorAll('.stat-label');
        stats[0].textContent = t.meses;
        stats[1].textContent = t.projetos;
        stats[2].textContent = t.tecnologias;
    }

    function updateHabilidades(lang) {
        const t = translations[lang].habilidades;
        document.querySelector('.habilidades h2').textContent = t.titulo;
        
        const cards = document.querySelectorAll('.skill-card');
        const skillKeys = ['html', 'js', 'nodejs', 'react', 'tailwind', 'tools'];
        
        cards.forEach((card, index) => {
            const skillKey = skillKeys[index];
            const skill = t.skills[skillKey];
            card.querySelector('h3').textContent = skill.nome;
            card.querySelector('p').textContent = skill.desc;
        });
    }

    function updateProjetos(lang) {
        const t = translations[lang].projetos;
        document.querySelector('.projetos h2').textContent = t.titulo;
        
        // Atualizar cards de projetos
        const cards = document.querySelectorAll('.projeto-card:not(.projeto-card--github)');
        const projectKeys = ['clinica', 'advocacia', 'vet'];
        
        cards.forEach((card, index) => {
            const project = t.projetos_list[projectKeys[index]];
            card.querySelector('h3').textContent = project.titulo;
            card.querySelector('p').textContent = project.desc;
            
            const botoes = card.querySelectorAll('.btn-projeto');
            botoes[0].innerHTML = '🌐 ' + t.verAoVivo;
            botoes[1].innerHTML = '📂 ' + t.repositorio;
        });
        
        // Atualizar card GitHub
        const githubCard = document.querySelector('.projeto-card--github');
        githubCard.querySelector('h3').textContent = t.github.titulo;
        githubCard.querySelector('p').textContent = t.github.desc;
        githubCard.querySelector('.btn').textContent = t.github.btn;
    }

    function updateContato(lang) {
        const t = translations[lang].contato;
        document.querySelector('.contato h2').textContent = t.titulo;
        
        const cards = document.querySelectorAll('.contato-card');
        const contactKeys = ['email', 'github', 'linkedin', 'whatsapp'];
        
        cards.forEach((card, index) => {
            card.querySelector('h3').textContent = t[contactKeys[index]];
        });
    }

    function updateFooter(lang) {
        const t = translations[lang].footer;
        const footerP = document.querySelector('footer p');
        const year = new Date().getFullYear();
        footerP.innerHTML = `&copy; <span id="ano-atual">${year}</span> - ${t.texto}`;
    }

    // Aplicar idioma ao carregar
    updateLanguage(currentLanguage);

    // Atualiza o ano no footer (mantém a funcionalidade original)
    document.getElementById('ano-atual').textContent = new Date().getFullYear();

    // ── Hamburguer Menu ──────────────────────────────────────────
    const hamburger  = document.getElementById('hamburger');
    const navMenu    = document.getElementById('navMenu');
    const navOverlay = document.getElementById('navOverlay');

    function openMenu() {
        hamburger.classList.add('active');
        navMenu.classList.add('open');
        navOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('open');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', () => {
        navMenu.classList.contains('open') ? closeMenu() : openMenu();
    });

    navOverlay.addEventListener('click', closeMenu);

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // ── Smooth scroll ────────────────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ── Animação das barras de progresso ─────────────────────────
    const animateSkills = () => {
        document.querySelectorAll('.progress').forEach(progress => {
            const level = progress.getAttribute('data-level');
            progress.style.width = `${level}%`;
        });
    };

    // ── Fade-in genérico ─────────────────────────────────────────
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';

                if (entry.target.classList.contains('skill-card')) {
                    setTimeout(animateSkills, 300);
                }

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll(
        '.skill-card, .sobre-content, .contato-card, .projeto-card'
    );

    animatedElements.forEach(element => {
        element.style.opacity    = '0';
        element.style.transform  = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(element);
    });

}); // fim DOMContentLoaded