// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});


// Close mobile menu after clicking a link

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});


// =========================
// PROPERTY MODAL
// =========================

const modal = document.getElementById("propertyModal");
const modalTitle = document.getElementById("modalTitle");
const closeModal = document.getElementById("closeModal");

const propertyButtons = document.querySelectorAll(".view-property");

propertyButtons.forEach(button => {

    button.addEventListener("click", () => {

        const propertyName = button.dataset.property;

        modalTitle.textContent = propertyName;

        modal.classList.add("active");

    });

});


// Close modal

closeModal.addEventListener("click", () => {

    modal.classList.remove("active");

});


// Close modal by clicking outside

modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        modal.classList.remove("active");
    }

});


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    alert(
        "Thank you for contacting ProArt REALTY. " +
        "This demo form is ready to be connected to email or WhatsApp."
    );

    contactForm.reset();

});


// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// =========================
// SCROLL REVEALS
// =========================

const revealTargets = document.querySelectorAll(
    ".about-image, .about-content, .section-heading, .property-card, .service, .cta > div, .cta > a, .contact-info, .contact-form"
);
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && !prefersReducedMotion) {
    document.body.classList.add("motion-ready");

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -36px 0px"
    });

    revealTargets.forEach(target => {
        target.classList.add("reveal");
        revealObserver.observe(target);
    });
}