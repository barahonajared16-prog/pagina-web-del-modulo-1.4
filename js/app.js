
// MENÚ DE NAVEGACIÓN
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

// ABRIR Y CERRAR EL MENÚ EN CELULARES
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");

    const abierto = menu.classList.contains("active");
    menuBtn.setAttribute("aria-expanded", abierto);
});

// CERRAR EL MENÚ AL ELEGIR UNA SECCIÓN
document.querySelectorAll("#menu a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
        menu.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

// MOSTRAR ELEMENTOS CUANDO APARECEN EN PANTALLA
const elementos = document.querySelectorAll(".reveal");

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
            observador.unobserve(entrada.target);
        }
    });
}, {
    threshold: 0.12
});

elementos.forEach((elemento) => {
    observador.observe(elemento);
});
