function ePrimo(numero) {
    for (var i = 2; i < numero; i++)
        if (numero % i === 0) return false;
    return numero !== 1;
}

function somatoria(a, b, c, d, e) {
    return a + b + c + d + e;
}

function fibonacci(num) {
    if (num <= 1) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);
}

function mdc(m, n) {
    var candidato = 0;
    m = parseInt(m);
    n = parseInt(n);

    candidato = Math.min(m, n);

    while (m % candidato != 0 || n % candidato != 0) {
        candidato--;
    }
    return candidato;
}

var vetor = [4, 9, 1, 5, 2, 8, 3, 7, 6];

function contagem(numero) {
    if(numero<=2)return 0;
    return numero - 2;
}

module.exports = {ePrimo, somatoria, fibonacci, mdc, vetor, contagem}