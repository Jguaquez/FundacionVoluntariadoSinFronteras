// Scroll suave para enlaces del menú
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });

        // cerrar menú en móviles
        document.getElementById('sidebar').classList.remove('active');
    });
});

// Menú desplegable (móvil)
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('active');
});

// Animaciones al hacer scroll
const elements = document.querySelectorAll('.animate');

//horas cursos
function toggleCurso(element) {
  const horas = element.querySelector(".horas");
  horas.style.display = horas.style.display === "block" ? "none" : "block";
}

function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.85;

    elements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

