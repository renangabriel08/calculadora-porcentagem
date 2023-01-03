const inicio = document.querySelector('.inicio');
const calculadoraPorcentagem = document.querySelector('.calculadora-porcentagem');
const calculadoraEquivalente = document.querySelector('.calculadora-equivalente');
const resultado = document.querySelector('.resultado');

function trocaDiv (divAtual, proximaDiv) {
    let displayNone
    let displayFlex

    if (divAtual == 1) {
        displayNone = inicio;
    } else if (divAtual == 2) {
        displayNone = calculadoraPorcentagem;
    } else if (divAtual == 3) {
        displayNone = calculadoraEquivalente
    } else {
        displayNone = resultado;
    }
    displayNone.style.display = 'none';

    if (proximaDiv == 1) {
        displayFlex = inicio;
    } else if (proximaDiv == 2) {
        displayFlex = calculadoraPorcentagem;
    } else if (proximaDiv == 3) {
        displayFlex = calculadoraEquivalente
    } else {
        displayFlex = resultado;
    }
    displayFlex.style.display = 'flex';
}

function validarPorcentagem() {
    const porcentagem = document.getElementById('porcentagem');
    const total = document.getElementById('total');

    if(!porcentagem.value || !total.value) {
        if (!porcentagem.value && !total.value) {
            porcentagem.style.border = 'solid 1px red';
            total.style.border = 'solid 1px red';
        } else if (!porcentagem.value) {
            porcentagem.style.border = 'solid 1px red';
            total.style.border = 'none';
        } else if (!total.value) {
            total.style.border = 'solid 1px red';
            porcentagem.style.border = 'none';
        }
    } else {
        let resultadoTotal = (porcentagem.value * total.value) / 100;
        const valorResultado = document.getElementById ('resultado');
        valorResultado.innerHTML = porcentagem.value + '% de ' + total.value + ' = ' + resultadoTotal;
        valorResultado.style.color = 'green';
        trocaDiv(2, 4);
    }
}

function validarEquivalente() {
    const porcentagem = document.getElementById('porcentagem2');
    const total = document.getElementById('total2');

    if(!porcentagem.value || !total.value) {
        if (!porcentagem.value && !total.value) {
            porcentagem.style.border = 'solid 1px red';
            total.style.border = 'solid 1px red';
        } else if (!porcentagem.value) {
            porcentagem.style.border = 'solid 1px red';
            total.style.border = 'none';
        } else if (!total.value) {
            total.style.border = 'solid 1px red';
            porcentagem.style.border = 'none';
        }
    } else {
        let resultadoTotal = (porcentagem.value * 100) / total.value;
        const valorResultado = document.getElementById ('resultado');
        valorResultado.innerHTML = porcentagem.value + ' equivale a ' + resultadoTotal + '% de ' + total.value;
        valorResultado.style.color = 'green';
        trocaDiv(3, 4);
    }
}