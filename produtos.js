const carrosselContainers = document.querySelectorAll('.carrossel-container');

carrosselContainers.forEach(container => {
    const carrossel = container.querySelector('.carrossel');
    const bantes = container.querySelector('.antes');
    const bdepois = container.querySelector('.depois');
    const item = container.querySelector('.item');
    
    const carrosselStyle = getComputedStyle(carrossel);
    const gap = parseInt(carrosselStyle.gap);
    
    const itemLargura = item.offsetWidth + gap;

    bdepois.addEventListener('click', () => {
        carrossel.scrollBy({ left: itemLargura, behavior: 'smooth' });
    });

    bantes.addEventListener('click', () => {
        carrossel.scrollBy({ left: -itemLargura, behavior: 'smooth' });
    });
});