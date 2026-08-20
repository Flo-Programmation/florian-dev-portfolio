document.addEventListener("DOMContentLoaded", () => {
    
    // 1. DOCK & THÈME SOMBRE / CLAIR
    const themeToggleBtn = document.getElementById("theme-toggle");
    let currentTheme = localStorage.getItem("theme") || "light";

    const applyTheme = (theme) => {
        document.documentElement.setAttribute("data-theme", theme);
        themeToggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
        localStorage.setItem("theme", theme);
    };
    applyTheme(currentTheme);

    themeToggleBtn.addEventListener("click", () => {
        currentTheme = currentTheme === "light" ? "dark" : "light";
        applyTheme(currentTheme);
    });

    // 2. ACCESSIBILITÉ : AGANDISSEMENT / RÉDUCTION POLICE
    let currentFontScale = parseInt(localStorage.getItem("fontScale")) || 100;
    
    const setFontScale = (scale) => {
        currentFontScale = Math.min(Math.max(scale, 85), 125); // Limite entre 85% et 125%
        document.documentElement.style.setProperty("--font-scale", `${currentFontScale}%`);
        localStorage.setItem("fontScale", currentFontScale);
    };
    setFontScale(currentFontScale);

    document.getElementById("font-increase").addEventListener("click", () => setFontScale(currentFontScale + 5));
    document.getElementById("font-decrease").addEventListener("click", () => setFontScale(currentFontScale - 5));

    // 3. TRADUCTION SATELLITE (FR / EN)
    const langBtn = document.getElementById("lang-btn");
    let currentLang = localStorage.getItem("lang") || "FR";

    const translations = {
        FR: {
            "nav-skills": "Compétences",
            "nav-education": "Formations",
            "nav-projects": "Projets",
            "nav-contact": "Contact",
            "header-subtitle": "Apprenti Développeur | Web, Logiciel & Systèmes Embarqués",
            "about-title": "À propos de moi",
            "about-text": "Développeur en apprentissage, passionné par la conception d'applications web, de logiciels et le développement d'interfaces modernes.",
            "skills-title": "Mes Compétences",
            "project1-title": "Projet 1",
            "project1-desc": "Description de ton premier projet."
        },
        EN: {
            "nav-skills": "Skills",
            "nav-education": "Education",
            "nav-projects": "Projects",
            "nav-contact": "Contact",
            "header-subtitle": "Apprentice Developer | Web, Software & Embedded Systems",
            "about-title": "About Me",
            "about-text": "Apprentice developer passionate about web applications, software design, and modern user interfaces.",
            "skills-title": "My Skills",
            "project1-title": "Project 1",
            "project1-desc": "Description of your first project."
        }
    };

    const applyLanguage = (lang) => {
        langBtn.textContent = lang === "FR" ? "EN" : "FR";
        document.querySelectorAll("[data-i18n]").forEach(element => {
            const key = element.getAttribute("data-i18n");
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        localStorage.setItem("lang", lang);
    };
    applyLanguage(currentLang);

    langBtn.addEventListener("click", () => {
        currentLang = currentLang === "FR" ? "EN" : "FR";
        applyLanguage(currentLang);
    });

    // 4. MENU BURGER MOBILE
    const burgerMenu = document.getElementById("burger-menu");
    const rightNav = document.getElementById("right-nav");

    burgerMenu.addEventListener("click", () => {
        burgerMenu.classList.toggle("active");
        rightNav.classList.toggle("open");
    });

    // 5. BULLE SOCIALE (FAB)
    const fabButton = document.getElementById("fab-button");
    const fabLinks = document.getElementById("fab-links");

    fabButton.addEventListener("click", () => {
        fabButton.classList.toggle("active");
        fabLinks.classList.toggle("show");
    });
});