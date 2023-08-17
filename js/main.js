const controleAjuste = document.querySelectorAll('[data-controle]');

controleAjuste.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataSet.controle, evento.target.parentNode)
    })
})


function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]');
    if(operacao === "-") {
        if(peca.value >= 1) {
            peca.value = parseInt(peca.value) - 1;
        }
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}