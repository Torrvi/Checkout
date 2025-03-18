const carrosselContainers = document.querySelectorAll('.carrossel-container');

carrosselContainers.forEach(container => {
    const carrossel = container.querySelector('.carrossel');
    const bantes = container.querySelector('.antes');
    const bdepois = container.querySelector('.depois');
    const item = container.querySelector('.item');

    
    const itemLargura = item.offsetWidth + 14;

    bdepois.addEventListener('click', () => {
        carrossel.scrollBy({ left: itemLargura, behavior: 'smooth' });
    });

    bantes.addEventListener('click', () => {
        carrossel.scrollBy({ left: -itemLargura, behavior: 'smooth' });
    });
});

const botoesAdicionar = document.querySelectorAll('.adicionar');

botoesAdicionar.forEach(botao => {
    botao.addEventListener('click', () => {
        if (botao.classList.contains('adicionado')) {
            botao.classList.remove('adicionado');
            botao.innerHTML = '<p>Adicionar</p>';
        } else {
            botao.classList.add('adicionado');
            botao.innerHTML = '<p>Adicionado</p>';
        }
    });
});