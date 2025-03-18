const carrosselContainers = document.querySelectorAll('.carrossel-container');

carrosselContainers.forEach(container => {
    const carrossel = container.querySelector('.carrossel');
    const bantes = container.querySelector('.antes');
    const bdepois = container.querySelector('.depois');
    const itemLargura = container.querySelector('.item').offsetWidth + 10;

    bdepois.addEventListener('click', () => {
        carrossel.scrollBy({ left: itemLargura, behavior: 'smooth' });
    });

    bantes.addEventListener('click', () => {
        carrossel.scrollBy({ left: -itemLargura, behavior: 'smooth' });
    });
});