const entregavel1 = require('./Entregavel1')

describe('Teste Primo: ', () => {
    it('2 é primo', () => {
        expect(entregavel1.ePrimo(2)).toBeTruthy();
    })
})

describe('Teste Primo Alt: ', () => {
    it('62 não é primo', () => {
        expect(entregavel1.ePrimo(62)).not.toBeTruthy();
    })
})

describe('Teste Somatória: ', () => {
    it('1 + 2 + 3 + 4 + 5 é igual a 15', () => {
        expect(entregavel1.somatoria(1, 2, 3, 4, 5)).toBe(15);
    })
})

describe('Teste Somatória Alt: ', () => {
    it('10 + 20 + 30 + 40 + 50 é menor que 200', () => {
        expect(entregavel1.somatoria(1, 2, 3, 4, 5)).toBeLessThan(200);
    })
})

describe('Teste Fibonacci: ', () => {
    it('Fibonacci de 10 é maior que 80', () => {
        expect(entregavel1.fibonacci(10)).toBeGreaterThan(80);
    })
})

describe('Teste Fibonacci Alt: ', () => {
    it('Fibonacci de 4 é 5', () => {
        expect(entregavel1.fibonacci(4)).toBe(5);
    })
})

describe('Teste Mínimo Divisor Comum: ', () => {
    it('MDC de 8 e 4 é 4', () => {
        expect(entregavel1.mdc(8, 4)).toBe(4);
    })
})

describe('Teste Mínimo Divisor Comum Alt: ', () => {
    it('MDC de 10 e 2 é 2', () => {
        expect(entregavel1.mdc(10, 2)).toBe(2);
    })
})

describe('Teste Vetor: ', () => {
    it('Vetor [4, 9, 1, 5, 2, 8, 3, 7, 6] quando organizado fica [1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
        expect(entregavel1.vetor.sort()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    })
})

describe('Teste contagem: ', () => {
    it('Existe 5 inteiro entre 1 7', () => {
        expect(entregavel1.contagem(7)).toBe(5);
    })
})

describe('Teste contagem Alt: ', () => {
    it('Valor inteiro entre 1 e 100 é maior que 90', () => {
        expect(entregavel1.contagem(100)).toBeGreaterThan(90);
    })
})


