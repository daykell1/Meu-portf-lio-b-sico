// Rolagem suave ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.querySelector('.carrossel-slides');
    const slides = document.querySelectorAll('.carrossel-slides .slide');
    const prevBtn = document.querySelector('.carrossel-btn.prev');
    const nextBtn = document.querySelector('.carrossel-btn.next');

    let currentIndex = 0;
    const totalSlides = slides.length;

    // Função para mostrar o slide atual
    function showSlide(index) {
        if (index >= totalSlides) {
            currentIndex = 0; // Volta para o primeiro slide
        } else if (index < 0) {
            currentIndex = totalSlides - 1; // Vai para o último slide
        } else {
            currentIndex = index;
        }
        slidesContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
    }

    // Event listeners para os botões
    prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    // Opcional: Autoplay do carrossel
    // setInterval(() => {
    //     showSlide(currentIndex + 1);
    // }, 7000); // Muda de slide a cada 7 segundos
});