// Se quiser adicionar animações adicionais com JavaScript, pode ser feito aqui.
// Exemplo de animação para os botões ao serem clicados:
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        button.classList.add('clicked');
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 200); // tempo para a animação
    });
});
function slideDown(element, duration) {
    let height = 0;
    element.style.display = 'block';
    element.style.height = '0px';

    let last = +new Date();
    let tick = function () {
        height = +height + (new Date() - last) / duration * 100;
        element.style.height = height + 'px';
        last = +new Date();

        if (height < element.scrollHeight) {
            requestAnimationFrame(tick);
        } else {
            element.style.height = 'auto'; // Ajusta para altura total
        }
    };
    tick();
}

function slideUp(element, duration) {
    let height = element.scrollHeight;

    let last = +new Date();
    let tick = function () {
        height = height - (new Date() - last) / duration * 100;
        element.style.height = height + 'px';
        last = +new Date();

        if (height > 0) {
            requestAnimationFrame(tick);
        } else {
            element.style.display = 'none';
            element.style.height = 'auto';
        }
    };
    tick();
}
