const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
const mainNav = document.querySelector(".main-nav")

if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener("click", () => {
        mobileMenuBtn.classList.toggle("active")
        mainNav.classList.toggle("active")
    })
}

// Smooth Scrolling ajustado dinamicamente
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        const header = document.querySelector(".header");

        if (target && header) {
            // Calcula a altura real do header fixo
            const headerHeight = header.offsetHeight;

            // Calcula o deslocamento exato da seção
            const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight;

            // Faz o scroll suave
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }

        // Fecha o menu mobile (se estiver aberto)
        const mainNav = document.querySelector(".main-nav");
        const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
        if (mainNav && mobileMenuBtn) {
            mainNav.classList.remove("active");
            mobileMenuBtn.classList.remove("active");
        }
    });
});

// Active Navigation
const sections = document.querySelectorAll("section[id]")
const navLinks = document.querySelectorAll(".nav-link")

window.addEventListener("scroll", () => {
    let current = ""
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        if (sectionTop <= 150) {
            current = section.getAttribute("id")
        }
    })

    navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active")
        }
    })
})