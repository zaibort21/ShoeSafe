// js/script.js

// Contador de oferta
function iniciarContador() {
    const contador = document.getElementById('contador');
    if (!contador) return;
    
    let tiempoRestante = 2 * 60 * 60 + 15 * 60 + 33; // 2 horas, 15 minutos, 33 segundos
    
    const actualizarContador = () => {
        const horas = Math.floor(tiempoRestante / 3600);
        const minutos = Math.floor((tiempoRestante % 3600) / 60);
        const segundos = tiempoRestante % 60;
        
        contador.textContent = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
        
        if (tiempoRestante > 0) {
            tiempoRestante--;
        } else {
            clearInterval(intervalo);
            contador.textContent = "¡Oferta finalizada!";
        }
    };
    
    actualizarContador();
    const intervalo = setInterval(actualizarContador, 1000);
}

// FAQ interactivo
function inicializarFAQ() {
    const faqPreguntas = document.querySelectorAll('.faq-pregunta');
    
    faqPreguntas.forEach(pregunta => {
        pregunta.addEventListener('click', () => {
            const respuesta = pregunta.nextElementSibling;
            respuesta.classList.toggle('active');
        });
    });
}

// Smooth scroll para enlaces internos
function inicializarSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Inicializar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    iniciarContador();
    inicializarFAQ();
    inicializarSmoothScroll();
});